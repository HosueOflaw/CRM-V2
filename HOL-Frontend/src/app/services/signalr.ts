import { Injectable, Injector } from '@angular/core';
import { HubConnection, HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import { Subject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { SweetAlertService } from '../shared/services/sweet-alert.service';
import { TaskService, TaskStatus } from './task.service';

import { environment } from '../../environments/environment';

export interface SignalRMessage {
    type: string;
    data: any;
    timestamp: string;
}

@Injectable({
    providedIn: 'root'
})
export class Signalr {
    private hubConnection?: HubConnection;
    private messageSubject = new Subject<SignalRMessage>();
    public message$ = this.messageSubject.asObservable();

    private readonly hubUrl = environment.apiUrl.replace('/api', '') + '/hubs/notifications';

    constructor(
        private router: Router,
        private swal: SweetAlertService,
        private injector: Injector
    ) { }

    private get taskService(): TaskService {
        return this.injector.get(TaskService);
    }

    private connectionTimestamp: number = 0;

    public async startConnection(token: string): Promise<void> {
        if (this.hubConnection?.state === 'Connected') return;

        try {
            this.connectionTimestamp = Date.now();
            this.hubConnection = new HubConnectionBuilder()
                .withUrl(this.hubUrl, {
                    accessTokenFactory: () => token
                })
                .withAutomaticReconnect()
                .configureLogging(LogLevel.Information)
                .build();

            // بدء الاتصال
            await this.hubConnection.start();
            console.log('✅ SignalR Connected!');

            // --- Robust Handling for Admin Channel ---
            const userStr = localStorage.getItem('user');
            if (userStr) {
                const user = JSON.parse(userStr);
                const role = (user.role || '').toLowerCase().trim();
                if (role === 'admin' || role === 'administrator') {
                    this.joinChannel('admins');
                }
            }

            // --- Unified Broadcast Listener ---
            this.hubConnection.on('broadcast', (message: SignalRMessage) => {
                console.log('📨 SignalR Broadcast:', message);
                this.handleTaskMessage(message);
            });

            // الاستماع لحدث تسجيل الخروج القسري
            this.hubConnection.on('force_logout', (data: any) => {
                this.handleForceLogout();
            });

            // Re-join channels on reconnected
            this.hubConnection.onreconnected(() => {
                console.log('🔄 SignalR Reconnected. Re-joining channels...');
                this.messageSubject.next({ type: 'reconnected', data: null, timestamp: new Date().toISOString() });
            });

        } catch (error) {
            console.error('❌ SignalR Connection Error:', error);
        }
    }

    private handleForceLogout() {
        const elapsedTime = Date.now() - this.connectionTimestamp;

        // إذا كان الاتصال جديداً (أقل من 5 ثواني)، فهذا يعني أننا نحن من دخلنا للتو وطردنا الآخرين
        if (elapsedTime < 5000) {
            this.swal.success({
                title: 'تم تأمين الحساب بنجاح ✅',
                text: 'تم اكتشاف جلسة نشطة أخرى لهذا الحساب، وقام النظام بإغلاقها فوراً لضمان أمان بياناتك. حسابك الآن محمي ويعمل على هذا الجهاز فقط.',
                confirmButtonText: 'حسناً، استكمال العمل',
                confirmButtonColor: '#10b981',
                allowOutsideClick: false
            });
            return;
        }

        // أما إذا كان الاتصال قديماً، فهذا يعني أن هناك شخص آخر دخل وطردنا نحن
        localStorage.clear();
        sessionStorage.clear();

        this.swal.error({
            title: 'تنبيه: دخول من جهاز آخر ⚠️',
            text: 'تم تسجيل خروجك لأن حسابك مفتوح حالياً على جهاز أو متصفح آخر. لضمان الأمان، لا يسمح بفتح الحساب على أكثر من جهاز في نفس الوقت.',
            confirmButtonText: 'العودة إلى صفحة الدخول',
            confirmButtonColor: '#ef4444',
            allowOutsideClick: false
        }).then(() => {
            window.location.href = '/login';
        });
    }

    private handleTaskMessage(message: SignalRMessage) {
        const data = message.data;
        const type = message.type;

        // Show UI Notification
        switch (type) {
            case 'new_task_assigned':
                this.swal.toast({
                    icon: 'info',
                    title: 'مهمة جديدة 📋',
                    text: `${data.title} - يُسندها: ${data.assignedBy}`,
                    timer: 8000,
                    showConfirmButton: true,
                    confirmButtonText: 'عرض التفاصيل'
                }).then(result => {
                    if (result.isConfirmed && data.taskId) {
                        this.router.navigate(['/management/tasks', data.taskId]);
                    }
                });
                break;
            case 'task_updated':
                this.swal.toast({ icon: 'info', title: 'تعديل مهمة ✏️', text: `تم تعديل المهمة: ${data.title}`, timer: 5000 });
                break;
            case 'task_status_updated':
                if (data.status === 'InProgress' && data.supervisorComment) {
                    this.swal.toast({
                        icon: 'warning',
                        title: 'تحتاج مراجعة! ⚠️',
                        text: `أعاد المشرف فتح المهمة: ${data.title}. ملاحظة: ${data.supervisorComment}`,
                        timer: 10000
                    });
                } else {
                    const statusLabel = this.taskService.getStatusLabel(data.newStatus || data.status);
                    this.swal.toast({
                        icon: 'success',
                        title: 'تحديث حالة 🔄',
                        text: `المهمة "${data.title}" أصبحت: ${statusLabel}`,
                        timer: 5000
                    });
                }
                break;
            case 'task_deleted':
                this.swal.toast({ icon: 'warning', title: 'حذف مهمة 🗑️', text: `تم حذف المهمة: ${data.title}`, timer: 5000 });
                break;
        }

        // Notify subscribers to refresh UI
        this.messageSubject.next(message);
    }

    /**
   * إيقاف الاتصال
   */
    public async stopConnection(): Promise<void> {
        if (this.hubConnection) {
            await this.hubConnection.stop();
            console.log('🔌 SignalR Disconnected');
        }
    }

    /**
    * الانضمام لمجموعة (Channel)
    */
    public async joinChannel(channel: string): Promise<void> {
        if (this.hubConnection?.state === 'Connected') {
            await this.hubConnection.invoke('JoinChannel', channel);
            console.log(`✅ Joined channel: ${channel}`);
        }
    }

    /**
    * مغادرة مجموعة
    */
    public async leaveChannel(channel: string): Promise<void> {
        if (this.hubConnection?.state === 'Connected') {
            await this.hubConnection.invoke('LeaveChannel', channel);
            console.log(`👋 Left channel: ${channel}`);
        }
    }

    /**
     * التحقق من حالة الاتصال
     */
    public isConnected(): boolean {
        return this.hubConnection?.state === 'Connected';
    }

}
