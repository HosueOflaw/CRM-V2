import { Injectable, Injector } from '@angular/core';
import { HubConnection, HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { SweetAlertService } from '../shared/services/sweet-alert.service';
import { TaskService, TaskStatus } from './task.service';
import { NotificationService } from './notification.service';

import { environment } from '../../environments/environment';

export interface SignalRMessage {
    type: string;
    data: any;
    timestamp: string;
}

export type ConnectionState = 'Connected' | 'Disconnected' | 'Reconnecting' | 'Error';

@Injectable({
    providedIn: 'root'
})
export class Signalr {
    private hubConnection?: HubConnection;
    private messageSubject = new Subject<SignalRMessage>();
    public message$ = this.messageSubject.asObservable();

    private connectionStateSubject = new BehaviorSubject<ConnectionState>('Disconnected');
    public connectionState$ = this.connectionStateSubject.asObservable();

    private readonly hubUrl = environment.apiUrl.replace('/api', '') + '/hubs/notifications';

    constructor(
        private router: Router,
        private swal: SweetAlertService,
        private injector: Injector,
        private notificationService: NotificationService
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
                .withAutomaticReconnect({
                    nextRetryDelayInMilliseconds: retryContext => {
                        if (retryContext.elapsedMilliseconds < 60000) return 2000;
                        return 10000;
                    }
                })
                .configureLogging(LogLevel.Information)
                .build();

            // بدء الاتصال
            await this.hubConnection.start();
            this.connectionStateSubject.next('Connected');
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
                this.handleNotificationMessage(message);
            });

            // الاستماع لحدث تسجيل الخروج القسري
            this.hubConnection.on('force_logout', (data: any) => {
                this.handleForceLogout();
            });

            // --- Connection Lifecycle Listeners ---
            this.hubConnection.onreconnecting(() => {
                console.warn('⚠️ SignalR Reconnecting...');
                this.connectionStateSubject.next('Reconnecting');

                // عرض تنبيه مستمر للموظف
                this.swal.fire({
                    title: 'انقطع الاتصال ⚠️',
                    text: 'جاري محاولة إعادة الاتصال بالخادم... يرجى الانتظار.',
                    icon: 'warning',
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    showConfirmButton: false,
                    didOpen: () => {
                        this.swal.showLoading();
                    }
                });
            });

            this.hubConnection.onreconnected(() => {
                console.log('🔄 SignalR Reconnected. Re-joining channels...');
                this.connectionStateSubject.next('Connected');

                // إغلاق التنبيه السابق وإظهار نجاح
                this.swal.close();
                this.swal.success({
                    title: 'تم استعادة الاتصال ✅',
                    text: 'أنت الآن متصل بالخادم وتستقبل الإشعارات مرة أخرى.',
                    timer: 2000,
                    showConfirmButton: false
                });

                this.messageSubject.next({ type: 'reconnected', data: null, timestamp: new Date().toISOString() });
            });

            this.hubConnection.onclose(() => {
                console.error('🔌 SignalR Disconnected and giving up.');
                this.connectionStateSubject.next('Disconnected');
                this.swal.close();
            });

        } catch (error) {
            console.error('❌ SignalR Connection Error:', error);
            this.connectionStateSubject.next('Error');
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

    private getProp(obj: any, keys: string[]): any {
        if (!obj) return null;

        // 1. Try exact and common naming conventions
        for (const key of keys) {
            if (obj[key] !== undefined && obj[key] !== null) return obj[key];

            const pascal = key.charAt(0).toUpperCase() + key.slice(1);
            if (obj[pascal] !== undefined && obj[pascal] !== null) return obj[pascal];

            const upper = key.toUpperCase();
            if (obj[upper] !== undefined && obj[upper] !== null) return obj[upper];
        }

        // 2. Last resort: Case-insensitive search on all keys
        const allObjKeys = Object.keys(obj);
        for (const key of keys) {
            const targetLower = key.toLowerCase();
            const foundKey = allObjKeys.find(k => k.toLowerCase() === targetLower);
            if (foundKey && obj[foundKey] !== undefined && obj[foundKey] !== null) {
                return obj[foundKey];
            }
        }

        console.warn(`⚠️ [SignalR] Could not find any of keys [${keys.join(', ')}] in data:`, obj);
        return null;
    }

    private handleNotificationMessage(message: SignalRMessage) {
        const data = message.data || {};
        const type = message.type;

        // Show UI Notification
        switch (type) {
            case 'new_task_assigned':
                const ntTitle = this.getProp(data, ['title']);
                const ntBy = this.getProp(data, ['assignedBy']);
                const ntId = this.getProp(data, ['taskId']);

                this.swal.toast({
                    icon: 'info',
                    title: 'مهمة جديدة 📋',
                    text: `${ntTitle} - يُسندها: ${ntBy}`,
                    timer: 8000
                });

                // Add to Notification Center
                this.notificationService.addNotification({
                    title: 'مهمة جديدة 📋',
                    message: `${ntTitle} - يُسندها: ${ntBy}`,
                    type: 'task',
                    route: ntId ? `/management/tasks/${ntId}` : undefined
                });
                break;

            case 'task_updated':
                const tuTitle = this.getProp(data, ['title']);
                this.swal.toast({ icon: 'info', title: 'تعديل مهمة ✏️', text: `تم تعديل المهمة: ${tuTitle}`, timer: 5000 });
                this.notificationService.addNotification({
                    title: 'تعديل مهمة ✏️',
                    message: `تم تعديل المهمة: ${tuTitle}`,
                    type: 'task'
                });
                break;

            case 'task_status_updated':
                const tsuStatus = this.getProp(data, ['status']);
                const tsuNewStatus = this.getProp(data, ['newStatus']);
                const tsuComment = this.getProp(data, ['supervisorComment']);
                const tsuTitle = this.getProp(data, ['title']);

                if (tsuStatus === 'InProgress' && tsuComment) {
                    this.swal.toast({
                        icon: 'warning',
                        title: 'تحتاج مراجعة! ⚠️',
                        text: `أعاد المشرف فتح المهمة: ${tsuTitle}. ملاحظة: ${tsuComment}`,
                        timer: 10000
                    });
                } else {
                    const statusLabel = this.taskService.getStatusLabel(tsuNewStatus || tsuStatus);
                    this.swal.toast({
                        icon: 'success',
                        title: 'تحديث حالة 🔄',
                        text: `المهمة "${tsuTitle}" أصبحت: ${statusLabel}`,
                        timer: 5000
                    });
                }

                this.notificationService.addNotification({
                    title: 'تحديث حالة 🔄',
                    message: `المهمة "${tsuTitle}" أصبحت: ${this.taskService.getStatusLabel(tsuNewStatus || tsuStatus)}`,
                    type: 'task'
                });
                break;

            case 'task_deleted':
                const tdTitle = this.getProp(data, ['title']);
                this.swal.toast({ icon: 'warning', title: 'حذف مهمة 🗑️', text: `تم حذف المهمة: ${tdTitle}`, timer: 5000 });
                this.notificationService.addNotification({
                    title: 'حذف مهمة 🗑️',
                    message: `تم حذف المهمة: ${tdTitle}`,
                    type: 'warn'
                });
                break;

            // --- Permissions ---
            case 'new_permission_request':
                const nprName = this.getProp(data, ['fullName', 'userName', 'requesterName']) || 'موظف';
                const nprVal = this.getProp(data, ['requestedValue', 'value', 'requestValue']) || '';
                const nprReason = this.getProp(data, ['reason', 'notes', 'note', 'description']) || 'بدون سبب مذكور';
                const nprAdminComment = this.getProp(data, ['adminComment', 'adminNotes']);

                let nprText = `الطلب: ${nprVal} - السبب: ${nprReason}`;
                if (nprAdminComment) {
                    nprText += ` - ملاحظة الأدمن: ${nprAdminComment}`;
                }

                this.swal.toast({
                    icon: 'info',
                    title: `طلب صلاحية: ${nprName}`,
                    text: nprText,
                    timer: 8000
                });

                this.notificationService.addNotification({
                    title: `طلب صلاحية: ${nprName}`,
                    message: nprText,
                    type: 'permission',
                    route: '/management/pending-permissions'
                });
                break;

            case 'permission_request_processed':
                const prpStatus = this.getProp(data, ['status']);
                const prpVal = this.getProp(data, ['requestedValue', 'value', 'requestValue']) || '';
                const prpComment = this.getProp(data, ['adminComment', 'comment', 'notes']);

                const statusText = prpStatus === 'Approved' ? 'تمت الموافقة على' : 'تم رفض';
                this.swal.toast({
                    icon: prpStatus === 'Approved' ? 'success' : 'error',
                    title: 'تحديث الصلاحيات',
                    text: `${statusText} طلبك الخاص بـ ${prpVal}. ملاحظة: ${prpComment || ''}`,
                    timer: 7000
                });

                this.notificationService.addNotification({
                    title: 'تحديث الصلاحيات',
                    message: `${statusText} طلبك الخاص بـ ${prpVal}. ملاحظة: ${prpComment || ''}`,
                    type: prpStatus === 'Approved' ? 'success' : 'error'
                });
                break;

            case 'permissions_delegated':
                const pdBy = this.getProp(data, ['supervisorName', 'fullName', 'userName', 'delegatedBy']) || 'المشرف';
                const pdDept = this.getProp(data, ['departmentName', 'department', 'value']) || '';

                this.swal.toast({
                    icon: 'success',
                    title: 'تحديث الصلاحيات',
                    text: `لقد قام ${pdBy} بتحديث صلاحياتك. لديك الآن وصول للقسم: ${pdDept}`,
                    timer: 8000
                });

                this.notificationService.addNotification({
                    title: 'تحديث الصلاحيات',
                    message: `لقد قام ${pdBy} بتحديث صلاحياتك للقسم: ${pdDept}`,
                    type: 'success'
                });
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
