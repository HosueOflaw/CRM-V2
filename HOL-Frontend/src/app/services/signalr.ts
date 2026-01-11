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

            // Join appropriate channels based on role
            this.joinRoleChannels();

            // --- Unified Broadcast Listener ---
            this.hubConnection.on('broadcast', (message: SignalRMessage) => {
                console.log('📨 SignalR Broadcast:', message);
                this.handleNotificationMessage(message);
            });

            // الاستماع لحدث تسجيل الخروج القسري
            this.hubConnection.on('force_logout', (data: any) => {
                this.handleForceLogout();
            });

            // Re-join channels on reconnected
            this.hubConnection.onreconnected(() => {
                console.log('🔄 SignalR Reconnected. Re-joining channels...');
                this.joinRoleChannels();
                this.messageSubject.next({ type: 'reconnected', data: null, timestamp: new Date().toISOString() });
            });

        } catch (error) {
            console.error('❌ SignalR Connection Error:', error);
        }
    }

    /**
     * Join role-specific channels (admins for Admin, dept_name for Supervisor)
     */
    private joinRoleChannels() {
        const userStr = localStorage.getItem('user');
        if (!userStr) return;

        const user = JSON.parse(userStr);
        const role = (user.role || '').toLowerCase().trim();

        // 1. Admins join the global admins channel
        if (role === 'admin' || role === 'administrator') {
            this.joinChannel('admins');
        }

        // 2. Supervisors join their department channel
        const supervisedDept = user.supervisedDepartment || user.department;
        if (role === 'supervisor' && supervisedDept) {
            this.joinChannel(`dept_${supervisedDept.toLowerCase()}`);
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
        if (!message) return;

        const data = message.data || {};
        const type = (message.type || '').toLowerCase().trim();

        console.log(`[SignalR] Processing notification type: ${type}`, data);

        // Show UI Notification
        switch (type) {
            case 'new_task_assigned':
                const ntTitle = this.getProp(data, ['title', 'Title']);
                const ntBy = this.getProp(data, ['assignedBy', 'AssignedBy']);
                const ntId = this.getProp(data, ['taskId', 'TaskId', 'Id']);

                this.swal.toast({
                    icon: 'info',
                    title: 'مهمة جديدة 📋',
                    text: `${ntTitle} - يُسندها: ${ntBy}`,
                    timer: 8000,
                    showConfirmButton: true,
                    confirmButtonText: 'عرض التفاصيل'
                }).then(result => {
                    if (result.isConfirmed && ntId) {
                        this.router.navigate(['/management/tasks', ntId]);
                    }
                });
                break;

            case 'task_updated':
                const tuTitle = this.getProp(data, ['title', 'Title']);
                this.swal.toast({ icon: 'info', title: 'تعديل مهمة ✏️', text: `تم تعديل المهمة: ${tuTitle}`, timer: 5000 });
                break;

            case 'task_status_updated':
                const tsuStatus = this.getProp(data, ['status', 'Status']);
                const tsuNewStatus = this.getProp(data, ['newStatus', 'NewStatus']);
                const tsuComment = this.getProp(data, ['supervisorComment', 'SupervisorComment']);
                const tsuTitle = this.getProp(data, ['title', 'Title']);

                if ((tsuStatus === 'InProgress' || tsuNewStatus === 'InProgress') && tsuComment) {
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
                break;

            case 'task_deleted':
                const tdTitle = this.getProp(data, ['title', 'Title']);
                this.swal.toast({ icon: 'warning', title: 'حذف مهمة 🗑️', text: `تم حذف المهمة: ${tdTitle}`, timer: 5000 });
                break;

            // --- Permissions ---
            case 'new_permission_request':
                const nprName = this.getProp(data, ['fullName', 'userName', 'requesterName', 'FullName']) || 'موظف';
                const nprVal = this.getProp(data, ['requestedValue', 'value', 'requestValue', 'RequestedValue']) || '';
                const nprReason = this.getProp(data, ['reason', 'notes', 'note', 'description', 'Reason']) || 'بدون سبب مذكور';
                const nprAdminComment = this.getProp(data, ['adminComment', 'adminNotes', 'AdminComment']);

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
                break;

            case 'permission_request_processed':
                const prpStatus = this.getProp(data, ['status', 'Status']);
                const prpVal = this.getProp(data, ['requestedValue', 'value', 'requestValue', 'RequestedValue']) || '';
                const prpComment = this.getProp(data, ['adminComment', 'comment', 'notes', 'AdminComment']);

                const statusText = prpStatus === 'Approved' ? 'تمت الموافقة على' : 'تم رفض';
                this.swal.toast({
                    icon: prpStatus === 'Approved' ? 'success' : 'error',
                    title: 'تحديث الصلاحيات',
                    text: `${statusText} طلبك الخاص بـ ${prpVal}. ملاحظة: ${prpComment || ''}`,
                    timer: 7000
                });
                break;

            case 'permissions_delegated':
                const pdBy = this.getProp(data, ['supervisorName', 'fullName', 'userName', 'delegatedBy', 'SupervisorName']) || 'المشرف';
                const pdDept = this.getProp(data, ['departmentName', 'department', 'value', 'DepartmentName']) || '';

                this.swal.toast({
                    icon: 'success',
                    title: 'تحديث الصلاحيات',
                    text: `لقد قام ${pdBy} بتحديث صلاحياتك. لديك الآن وصول للقسم: ${pdDept}`,
                    timer: 8000
                });
                break;

            // --- Breaks ---
            case 'break_started':
            case 'startbreak':
            case 'breakstarted':
                const bsName = this.getProp(data, ['fullName', 'userName', 'name', 'FullName', 'Name']) || 'موظف';
                const bsDept = this.getProp(data, ['department', 'section', 'Department', 'Section']) || '';

                this.swal.toast({
                    icon: 'info',
                    title: 'بداية استراحة ☕',
                    text: `${bsName} بدأ استراحته الآن (القسم: ${bsDept})`,
                    timer: 6000
                });
                break;

            case 'break_ended':
            case 'endbreak':
            case 'breakended':
                const beName = this.getProp(data, ['fullName', 'userName', 'name', 'FullName', 'Name']) || 'موظف';
                const beDept = this.getProp(data, ['department', 'section', 'Department', 'Section']) || '';
                const beDuration = this.getProp(data, ['durationMinutes', 'minutes', 'duration', 'DurationMinutes']) || '?';
                const beLate = this.getProp(data, ['lateMinutes', 'late', 'LateMinutes']) || 0;

                let beText = `${beName} عاد من الاستراحة. المدة: ${beDuration} دقيقة.`;
                if (beLate > 0) {
                    beText += ` (تأخير: ${beLate} دقيقة ⚠️)`;
                }

                this.swal.toast({
                    icon: beLate > 0 ? 'warning' : 'success',
                    title: 'نهاية استراحة ✅',
                    text: beText,
                    timer: 8000
                });
                break;

            default:
                console.log(`⚠️ Unhandled SignalR notification type: ${type}`, data);
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
