import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, delay, map, switchMap, first } from 'rxjs';
import { AuthService } from '../../core/services/auth';
import { NotificationService } from '../../services/notification.service';
import { BreakService } from '../../services/break.service';
import { PermissionService } from '../../core/services/permission.service';

export interface AiMessage {
    text: string;
    isUser: boolean;
    timestamp: Date;
    action?: any; // Navigation Action
    execution?: () => void; // Direct Service Execution
    suggestions?: string[];
}

interface KnowledgeItem {
    keywords: string[];
    answer: string;
    suggestions?: string[];
    priority?: number;
    requiredRole?: string;
}

interface NavigationRule {
    keywords: string[];
    route: string;
    response: string;
    suggestions?: string[];
}

interface ActionRule {
    keywords: string[];
    execute: (services: any) => void;
    response: string;
    suggestions?: string[];
}

@Injectable({
    providedIn: 'root'
})
export class AiService {

    constructor(
        private router: Router,
        private authService: AuthService,
        private notifService: NotificationService,
        private breakService: BreakService,
        private permissionService: PermissionService
    ) { }

    // --- Knowledge Base ---
    private knowledgeBase: KnowledgeItem[] = [
        {
            keywords: ['بيت القانون', 'house of law', 'الشركة', 'company', 'من نحن', 'about'],
            answer: `
            **🏛️ بيت القانون (House of Law)**
            منصة قانونية ذكية متكاملة لرفع كفاءة العمل القانوني.
            نحن نساعدك في:
            1. **إدارة القضايا والمهام**: تابع كل ملف بدقة.
            2. **إدارة الفريق**: راقب الأداء والحضور.
            3. **أمان البيانات**: نظام صلاحيات متطور.
            `,
            suggestions: ['شرح الداشبورد', 'نظام المهام']
        },
        // ... (Previous KB items kept for brevity, effectively re-adding them or keeping logic same)
        {
            keywords: ['مهام', 'task', 'مهمة', 'tasks', 'كانبان', 'kanban'],
            answer: `
            **📋 نظام إدارة المهام (Kanban)**
            يتيح لك تنظيم العمل بطريقة بصرية.
            - **السحب والإفلات**: حرك المهام بين الأعمدة.
            - **التفاصيل**: اضغط على أي مهمة لمعرفة الموكل.
            `,
            suggestions: ['افتح المهام', 'مهامي اليوم']
        },
        {
            keywords: ['صلاحية', 'permission', 'access'],
            answer: `
            **🛡️ نظام الصلاحيات الذكي**
            تعتمد إمكانية وصولك على "القسم" و "الدور" الوظيفي.
            `,
            suggestions: ['اطلب صلاحية', 'طلباتي المعلقة']
        },
        {
            keywords: ['استراحة', 'break', 'راحة'],
            answer: `
            **☕ سجل الاستراحات**
            نظام دقيق لحساب ساعات العمل الفعلية.
            ⚠️ النظام ينبهك وقاؤياً إذا تجاوزت المدة المسموحة!
            `,
            suggestions: ['ابدأ استراحة', 'تقرير الاستراحات']
        }
    ];

    // --- Navigation Rules ---
    private navigationRules: NavigationRule[] = [
        {
            keywords: ['رئيسية', 'home', 'dashboard'],
            route: '/',
            response: 'راجعين للرئيسية يا ريس 🏠',
            suggestions: ['المهام']
        },
        {
            keywords: ['إعدادات', 'settings'],
            route: '/settings',
            response: 'جاري فتح صفحة الإعدادات ⚙️',
            suggestions: []
        },
        {
            keywords: ['مهام', 'tasks'],
            route: '/management/my-tasks',
            response: 'يلا بينا على المهام 🚀',
            suggestions: ['إنشاء مهمة']
        },
        {
            keywords: ['طلباتي', 'my permissions'],
            route: '/management/my-permissions',
            response: 'صفحة طلباتك وصلاحياتك جاهزة 🛡️',
            suggestions: ['طلب جديد']
        }
    ];

    // --- Action Rules (The Superpowers) ---
    private actionRules: ActionRule[] = [
        {
            keywords: ['ابدأ استراحة', 'start break', 'بريك', 'راحة', 'خارج'],
            execute: (s) => {
                // Return a special flag or handle 'pending confirmation' in the component?
                // Simpler: Execute returns an observable that we can subscribe to? 
                // Best for generic: The execute function performs the logic.
                // To match "Like the button", we need confirmation.
                // We'll let the Component handle the confirmation UI based on the response suggestion?
                // No, let's implement a 'confirmation' flow in text.
                // Actually, the user wants the RESULT to be like the button.

                // Prompt first
                return;
            },
            response: '⚠️ هل أنت متأكد أنك تريد بدء **استراحة** الآن؟',
            suggestions: ['نعم، ابدأ الاستراحة', 'لا، إلغاء']
        },
        {
            keywords: ['نعم، ابدأ الاستراحة', 'confirm start break'],
            execute: (s) => {
                s.breakService.startBreak().subscribe({
                    next: () => {
                        // Toast handled by AppTopbar? No, we should show one too or rely on Topbar.
                        // Topbar listens to refresh, but might not show Toast for external events.
                        // Let's show a browser notification or simple success message.
                    },
                    error: (err: any) => console.error(err)
                });
            },
            response: '✅ تم بدء الاستراحة! استمتع بوقتك ☕',
            suggestions: ['إنهاء الاستراحة']
        },
        {
            keywords: ['إنهاء استراحة', 'end break', 'خلصت', 'رجعت', 'عودة'],
            execute: (s) => { }, // Placeholder for separate confirmation
            response: '⚠️ هل انتهيت من الاستراحة وتريد **العودة للعمل**؟',
            suggestions: ['نعم، إنهاء الاستراحة', 'لا']
        },
        {
            keywords: ['نعم، إنهاء الاستراحة', 'confirm end break'],
            execute: (s) => s.breakService.endBreak().subscribe(),
            response: '💪 حمد لله على السلامة! تم تسجيل عودتك للعمل.',
            suggestions: ['المهام']
        },
        {
            keywords: ['امسح الإشعارات', 'clear notifications', 'حذف الاشعارات', 'نظف'],
            execute: (s) => s.notifService.clearAll(),
            response: '🗑️ تم مسح جميع الإشعارات. صندوقك نظيف تماماً ✨',
            suggestions: ['إيه الأخبار؟']
        },
        {
            keywords: ['قرأت الكل', 'mark all read', 'تحديد الكل كمقروء'],
            execute: (s) => s.notifService.markAllAsRead(),
            response: '👁️ علمت لك على كله كمقروء ✅',
            suggestions: []
        },
        {
            keywords: ['خروج', 'logout', 'سجل خروج', 'اقفل'],
            execute: (s) => s.authService.logout().subscribe(),
            response: '👋 جاري تسجيل الخروج... نراك قريباً!',
            suggestions: []
        }
    ];

    processMessage(msg: string): Observable<AiMessage> {
        return new Observable<AiMessage>(observer => {
            const text = msg.toLowerCase().trim();
            const user = this.authService.getUser();
            const userName = user?.name || user?.fullName || 'يا بطل';
            const userRole = (user?.role || '').toLowerCase();

            // 0. Proactive Status Checks
            if (text.match(/^(اخبار|أخبار|علوم|الوضع|status|update|new|what's up)/)) {
                this.buildStatusReport(userName, userRole).subscribe(report => {
                    observer.next(report);
                    observer.complete();
                });
                return;
            }

            // 1. Identify User
            if (text.match(/(who am i|مين انا|انا مين|بياناتي)/)) {
                observer.next({
                    text: `أنت **${userName}** 👤\nدورك: **${this.getRoleInArabic(userRole)}**`,
                    isUser: false,
                    timestamp: new Date(),
                    suggestions: ['إيه الأخبار؟']
                });
                observer.complete();
                return;
            }

            // 2. CHECK FOR DIRECT ACTIONS (Highest Priority)
            const bestExecution = this.findBestMatch(text, this.actionRules);

            // 3. Navigation Logic
            const bestAction = this.findBestMatch(text, this.navigationRules);

            // 4. Information Logic
            const bestInfo = this.findBestMatch(text, this.knowledgeBase);

            let response: AiMessage = {
                text: '',
                isUser: false,
                timestamp: new Date()
            };

            // Decision Logic
            // If Execution match is strong, DO IT.
            if (bestExecution && bestExecution.score >= 15) { // Threshold to avoid accidental triggers
                response.text = bestExecution.item.response;
                response.execution = () => bestExecution.item.execute({
                    breakService: this.breakService,
                    notifService: this.notifService,
                    authService: this.authService
                });
                response.suggestions = bestExecution.item.suggestions;
            }
            else if (bestAction && (!bestInfo || bestAction.score >= bestInfo.score)) {
                response.text = `${bestAction.item.response}`;
                response.action = () => this.router.navigate([bestAction.item.route]);
                response.suggestions = bestAction.item.suggestions;
            }
            else if (bestInfo) {
                response.text = bestInfo.item.answer;
                response.suggestions = bestInfo.item.suggestions;
            }
            else {
                // Fallback
                if (text.match(/(شكرا|thx|thanks|merci)/)) {
                    response.text = `العفو يا ${userName}! 🌹`;
                } else if (text.match(/(صباح|مساء|morning|hi|hello|سلام)/)) {
                    response.text = `أهلاً بك يا ${this.getRoleInArabic(userRole)} ${userName}! 👋\nتحب أشيكلك على المهام ولا الإشعارات؟`;
                    response.suggestions = ['إيه الأخبار؟', 'المهام'];
                } else {
                    response.text = `مش متأكد يا ${userName} 😅.\nجرب تقول: "إبدأ راحة"، "امسح الإشعارات"، أو "وديني المهام".`;
                    response.suggestions = ['إيه الأخبار؟', 'المهام', 'طلب صلاحية'];
                }
            }

            // Delay for realism then emit
            setTimeout(() => {
                observer.next(response);
                observer.complete();
            }, 600);
        });
    }

    private buildStatusReport(userName: string, userRole: string): Observable<AiMessage> {
        return this.notifService.unreadCount$.pipe(
            first(),
            switchMap(notifCount => {
                return this.breakService.getStatus().pipe(
                    map((breakStatus: any) => {
                        let report = `**تقرير سريع لـ ${userName}** 📋\n\n`;
                        const suggestions = ['المهام', 'الرئيسية'];

                        if (notifCount > 0) {
                            report += `🔴 لديك **${notifCount}** إشعارات جديدة.\n`;
                            suggestions.push('امسح الإشعارات');
                        } else {
                            report += `✅ لا توجد إشعارات جديدة.\n`;
                        }

                        const isOnBreak = breakStatus?.isOnBreak || breakStatus?.isInBreak;
                        if (isOnBreak) {
                            report += `☕ أنت في **استراحة**. لا تتأخر! 😉\n`;
                            suggestions.unshift('إنهاء استراحة');
                        } else {
                            report += `💼 أنت في وضع **العمل**.\n`;
                            suggestions.push('ابدأ استراحة');
                        }

                        return {
                            text: report,
                            isUser: false,
                            timestamp: new Date(),
                            suggestions: suggestions
                        } as AiMessage;
                    })
                );
            })
        );
    }

    private findBestMatch(text: string, items: any[]): { item: any, score: number } | null {
        let bestItem = null;
        let maxScore = 0;

        for (const item of items) {
            let score = 0;
            for (const keyword of item.keywords) {
                if (text.includes(keyword.toLowerCase())) {
                    score += 10;
                    score += keyword.length;
                    if (text.startsWith(keyword.toLowerCase())) score += 5;
                }
            }
            if (score > maxScore) {
                maxScore = score;
                bestItem = item;
            }
        }
        return maxScore > 0 ? { item: bestItem, score: maxScore } : null;
    }

    private getRoleInArabic(role: string): string {
        switch (role) {
            case 'admin': return 'المدير';
            case 'supervisor': return 'المشرف';
            case 'employee': return 'الموظف المثالي';
            default: return 'المستخدم';
        }
    }
}
