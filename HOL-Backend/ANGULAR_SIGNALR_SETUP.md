# 📡 SignalR Setup في Angular

## 1️⃣ **تثبيت المكتبة:**

```bash
npm install @microsoft/signalr
```

---

## 2️⃣ **إنشاء SignalR Service:**

### `signalr.service.ts`

```typescript
import { Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import { Subject, Observable } from 'rxjs';

export interface SignalRMessage {
  type: string;
  data: any;
  timestamp: string;
}

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  private hubConnection?: HubConnection;
  private messageSubject = new Subject<SignalRMessage>();
  public message$ = this.messageSubject.asObservable();
  
  private readonly hubUrl = 'https://localhost:7112/hubs/notifications'; // Backend URL

  constructor() {}

  /**
   * بدء الاتصال بالـ SignalR Hub
   */
  public async startConnection(): Promise<void> {
    try {
      this.hubConnection = new HubConnectionBuilder()
        .withUrl(this.hubUrl, {
          // لو محتاج authentication
          // accessTokenFactory: () => this.getToken()
        })
        .withAutomaticReconnect() // إعادة الاتصال تلقائياً
        .configureLogging(LogLevel.Information)
        .build();

      // الاستماع للأحداث
      this.hubConnection.on('broadcast', (message: SignalRMessage) => {
        console.log('📨 SignalR Message:', message);
        this.messageSubject.next(message);
      });

      // بدء الاتصال
      await this.hubConnection.start();
      console.log('✅ SignalR Connected!');
    } catch (error) {
      console.error('❌ SignalR Connection Error:', error);
      throw error;
    }
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
```

---

## 3️⃣ **استخدام SignalR في Component:**

### `add-client-form.ts`

```typescript
import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { SignalRService, SignalRMessage } from '../services/signalr.service';
import { Subscription } from 'rxjs';

export class AddClientFormComponent implements OnInit, OnDestroy {
  private signalRService = inject(SignalRService);
  private signalRSubscription?: Subscription;

  ngOnInit() {
    // بدء الاتصال بالـ SignalR
    this.signalRService.startConnection().then(() => {
      // الاستماع للأحداث
      this.signalRSubscription = this.signalRService.message$.subscribe(
        (message: SignalRMessage) => {
          this.handleSignalRMessage(message);
        }
      );
    }).catch(error => {
      console.error('Failed to connect to SignalR:', error);
    });
  }

  ngOnDestroy() {
    // إيقاف الاشتراك
    this.signalRSubscription?.unsubscribe();
    // إيقاف الاتصال (اختياري - لو عايز يفضل متصل)
    // this.signalRService.stopConnection();
  }

  /**
   * معالجة الرسائل الواردة من SignalR
   */
  private handleSignalRMessage(message: SignalRMessage): void {
    switch (message.type) {
      case 'client:created':
        // موكل جديد تم إضافته
        this.onClientCreated(message.data);
        break;
      
      case 'client:attachment_added':
        // مرفق جديد تم إضافته
        this.onAttachmentAdded(message.data);
        break;
      
      case 'client:contact_deleted':
        // رقم تواصل تم حذفه
        this.onContactDeleted(message.data);
        break;
      
      default:
        console.log('Unknown SignalR event:', message.type);
    }
  }

  /**
   * عند إضافة موكل جديد
   */
  private onClientCreated(data: any): void {
    console.log('🎉 New client created:', data);
    
    // لو الموكل المضاف مش من نفس المستخدم
    if (data.clientId !== this.currentClientId) {
      // إشعار للمستخدم
      Swal.fire({
        icon: 'info',
        title: 'موكل جديد',
        text: `تم إضافة موكل جديد: ${data.name} (${data.code})`,
        timer: 3000,
        showConfirmButton: false
      });
      
      // تحديث القائمة (لو موجودة)
      this.refreshClientsList();
    }
  }

  /**
   * عند إضافة مرفق
   */
  private onAttachmentAdded(data: any): void {
    console.log('📎 Attachment added:', data);
    // تحديث قائمة المرفقات
  }

  /**
   * عند حذف رقم تواصل
   */
  private onContactDeleted(data: any): void {
    console.log('📞 Contact deleted:', data);
    // تحديث قائمة الأرقام
  }

  /**
   * إضافة موكل (بعد النجاح)
   */
  async addClient() {
    try {
      // ... كود إضافة الموكل ...
      
      const response = await this.clientService.createClient(this.clientForm).toPromise();
      
      if (response) {
        // ✅ الموكل تم إضافته بنجاح
        // الـ SignalR event هيتبعت تلقائياً من الـ Backend
        // مش محتاج تعمل حاجة هنا
        
        Swal.fire({
          icon: 'success',
          title: 'تم الحفظ',
          text: 'تم إضافة الموكل بنجاح',
          timer: 2000
        });
        
        this.closeModal();
      }
    } catch (error) {
      console.error('Error adding client:', error);
    }
  }
}
```

---

## 4️⃣ **تسجيل الـ Service في `app.config.ts`:**

```typescript
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { SignalRService } from './services/signalr.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(),
    SignalRService // ✅ تسجيل الـ Service
  ]
};
```

---

## 5️⃣ **الاستخدام في App Component (اختياري):**

لو عايز تبدأ الاتصال عند بدء التطبيق:

```typescript
// app.component.ts
import { Component, OnInit, inject } from '@angular/core';
import { SignalRService } from './services/signalr.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
  private signalRService = inject(SignalRService);

  ngOnInit() {
    // بدء الاتصال عند بدء التطبيق
    this.signalRService.startConnection().catch(err => {
      console.error('SignalR connection failed:', err);
    });
  }
}
```

---

## ✅ **الخلاصة:**

1. ✅ تثبيت `@microsoft/signalr`
2. ✅ إنشاء `SignalRService`
3. ✅ استخدام الـ Service في Component
4. ✅ الاستماع للأحداث (`client:created`, `client:attachment_added`, etc.)
5. ✅ معالجة الرسائل الواردة

**الـ Backend هيبعت الأحداث تلقائياً عند:**
- إضافة موكل جديد
- إضافة مرفق
- حذف رقم تواصل
- حذف مرفق

**كل المستخدمين المتصلين هيستلموا الإشعارات!** 🚀
