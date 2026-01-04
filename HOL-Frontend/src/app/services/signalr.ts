import { Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import { Subject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth';

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

    private readonly hubUrl = 'https://localhost:7112/hubs/notifications'; // Backend URL

    constructor(
        private router: Router,
        // Inject AuthService via injector or directly if no circular dependency, 
        // avoiding circular dependency might require different architecture but let's try direct first or use token getter
    ) { }

    public async startConnection(token: string): Promise<void> {
        try {
            this.hubConnection = new HubConnectionBuilder()
                .withUrl(this.hubUrl, {
                    accessTokenFactory: () => token
                })
                .withAutomaticReconnect()
                .configureLogging(LogLevel.Information)
                .build();

            // الاستماع للأحداث
            this.hubConnection.on('broadcast', (message: SignalRMessage) => {
                console.log('📨 SignalR Message:', message);
                this.messageSubject.next(message);
            });

            // الاستماع لحدث تسجيل الخروج القسري
            this.hubConnection.on('force_logout', (data: any) => {
                console.warn('⚠️ Force Logout received:', data);
                this.handleForceLogout();
            });

            // بدء الاتصال
            await this.hubConnection.start();
            console.log('✅ SignalR Connected!');
        } catch (error) {
            console.error('❌ SignalR Connection Error:', error);
            // throw error; // Don't crash app if SignalR fails
        }
    }

    private handleForceLogout() {
        // Clear local storage manually to avoid circular dependency with AuthService if possible
        localStorage.clear();
        sessionStorage.clear();
        this.router.navigate(['/login']);
        alert('تم تسجيل خروجك لأن الحساب تم استخدامه من جهاز آخر.');
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
