import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Notification {
    id: string;
    title: string;
    message: string;
    type: 'success' | 'info' | 'warn' | 'error' | 'task' | 'permission';
    timestamp: Date;
    isRead: boolean;
    route?: string;
}

@Injectable({
    providedIn: 'root'
})
export class NotificationService {
    private readonly STORAGE_KEY = 'crm_notifications';
    private readonly MAX_NOTIFICATIONS = 20;

    private notificationsSubject = new BehaviorSubject<Notification[]>([]);
    public notifications$ = this.notificationsSubject.asObservable();

    private unreadCountSubject = new BehaviorSubject<number>(0);
    public unreadCount$ = this.unreadCountSubject.asObservable();

    constructor() {
        this.loadFromStorage();
    }

    private loadFromStorage() {
        const saved = localStorage.getItem(this.STORAGE_KEY);
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                // Convert string dates back to Date objects
                const notifications = parsed.map((n: any) => ({
                    ...n,
                    timestamp: new Date(n.timestamp)
                }));
                this.notificationsSubject.next(notifications);
                this.updateUnreadCount();
            } catch (e) {
                console.error('Failed to parse notifications from storage', e);
                this.notificationsSubject.next([]);
            }
        }
    }

    private saveToStorage() {
        const notifications = this.notificationsSubject.value;
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(notifications));
    }

    public addNotification(notification: Omit<Notification, 'id' | 'timestamp' | 'isRead'>) {
        const newNotification: Notification = {
            ...notification,
            id: Math.random().toString(36).substring(2, 11),
            timestamp: new Date(),
            isRead: false
        };

        const current = [newNotification, ...this.notificationsSubject.value].slice(0, this.MAX_NOTIFICATIONS);
        this.notificationsSubject.next(current);
        this.updateUnreadCount();
        this.saveToStorage();
    }

    public markAsRead(id: string) {
        const updated = this.notificationsSubject.value.map(n =>
            n.id === id ? { ...n, isRead: true } : n
        );
        this.notificationsSubject.next(updated);
        this.updateUnreadCount();
        this.saveToStorage();
    }

    public markAllAsRead() {
        const updated = this.notificationsSubject.value.map(n => ({ ...n, isRead: true }));
        this.notificationsSubject.next(updated);
        this.updateUnreadCount();
        this.saveToStorage();
    }

    public clearAll() {
        this.notificationsSubject.next([]);
        this.unreadCountSubject.next(0);
        localStorage.removeItem(this.STORAGE_KEY);
    }

    private updateUnreadCount() {
        const count = this.notificationsSubject.value.filter(n => !n.isRead).length;
        this.unreadCountSubject.next(count);
    }

    /**
     * Helper to get relative time in Arabic
     */
    public getRelativeTime(date: Date): string {
        const now = new Date();
        const diffMs = now.getTime() - date.getTime();
        const diffSecs = Math.floor(diffMs / 1000);
        const diffMins = Math.floor(diffSecs / 60);
        const diffHours = Math.floor(diffMins / 60);
        const diffDays = Math.floor(diffHours / 24);

        if (diffSecs < 60) return 'الآن';
        if (diffMins === 1) return 'منذ دقيقة';
        if (diffMins === 2) return 'منذ دقيقتين';
        if (diffMins < 11) return `منذ ${diffMins} دقائق`;
        if (diffMins < 60) return `منذ ${diffMins} دقيقة`;

        if (diffHours === 1) return 'منذ ساعة';
        if (diffHours === 2) return 'منذ ساعتين';
        if (diffHours < 11) return `منذ ${diffHours} ساعات`;
        if (diffHours < 24) return `منذ ${diffHours} ساعة`;

        if (diffDays === 1) return 'أمس';
        if (diffDays === 2) return 'منذ يومين';
        return date.toLocaleDateString('ar-EG');
    }
}
