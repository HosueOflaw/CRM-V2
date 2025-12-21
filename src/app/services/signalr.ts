// import { Injectable } from '@angular/core';
// import { HubConnection, HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
// import { Subject, Observable } from 'rxjs';

// export interface SignalRMessage {
//   type: string;
//   data: any;
//   timestamp: string;
// }

// @Injectable({
//   providedIn: 'root'
// })
// export class Signalr {
//   private hubConnection?: HubConnection;
//   private messageSubject = new Subject<SignalRMessage>();
//   public message$ = this.messageSubject.asObservable();
  
//   private readonly hubUrl = 'https://localhost:7112/hubs/notifications'; // Backend URL

//   constructor() {}
 
//   public async startConnection(): Promise<void> {
//     try {
//       this.hubConnection = new HubConnectionBuilder()
//         .withUrl(this.hubUrl, {
//           // لو محتاج authentication
//           // accessTokenFactory: () => this.getToken()
//         })
//         .withAutomaticReconnect() // إعادة الاتصال تلقائياً
//         .configureLogging(LogLevel.Information)
//         .build();

//       // الاستماع للأحداث
//       this.hubConnection.on('broadcast', (message: SignalRMessage) => {
//         console.log('📨 SignalR Message:', message);
//         this.messageSubject.next(message);
//       });

//       // بدء الاتصال
//       await this.hubConnection.start();
//       console.log('✅ SignalR Connected!');
//     } catch (error) {
//       console.error('❌ SignalR Connection Error:', error);
//       throw error;
//     }
//   }

//     /**
//    * إيقاف الاتصال
//    */
//   public async stopConnection(): Promise<void> {
//     if (this.hubConnection) {
//       await this.hubConnection.stop();
//       console.log('🔌 SignalR Disconnected');
//     }
//   }

//    /**
//    * الانضمام لمجموعة (Channel)
//    */
//   public async joinChannel(channel: string): Promise<void> {
//     if (this.hubConnection?.state === 'Connected') {
//       await this.hubConnection.invoke('JoinChannel', channel);
//       console.log(`✅ Joined channel: ${channel}`);
//     }
//   }

//    /**
//    * مغادرة مجموعة
//    */
//   public async leaveChannel(channel: string): Promise<void> {
//     if (this.hubConnection?.state === 'Connected') {
//       await this.hubConnection.invoke('LeaveChannel', channel);
//       console.log(`👋 Left channel: ${channel}`);
//     }
//   }

//   /**
//    * التحقق من حالة الاتصال
//    */
//   public isConnected(): boolean {
//     return this.hubConnection?.state === 'Connected';
//   }

// }
