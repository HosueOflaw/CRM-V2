import { Component, HostListener, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../core/services/auth';
import { UserService, UserDto } from '../../services/user.service';
import { debounceTime, distinctUntilChanged, Subject, takeUntil } from 'rxjs';
import { LayoutService } from '../service/layout.service';

interface CommandItem {
    label: string;
    icon: string;
    route?: string;
    action?: string;
    category: 'نظام' | 'تنقل' | 'موظفين';
    description?: string;
}

@Component({
    selector: 'app-command-palette',
    standalone: true,
    imports: [CommonModule, DialogModule, InputTextModule, RouterModule, FormsModule],
    template: `
    <p-dialog 
        [(visible)]="visible" 
        [modal]="true" 
        [closable]="false"
        [draggable]="false"
        [resizable]="false"
        styleClass="command-palette-dialog"
        (onShow)="onDialogShow()"
        maskStyleClass="command-palette-mask">
        
        <div class="palette-container">
            <div class="search-wrapper">
                <i class="pi pi-search search-icon"></i>
                <input #searchInput type="text" 
                       [(ngModel)]="query" 
                       (input)="onSearch($event)"
                       (keydown.enter)="executeItem(results[selectedIndex])"
                       (keydown.arrowdown)="moveSelection(1)"
                       (keydown.arrowup)="moveSelection(-1)"
                       (keydown.escape)="visible = false"
                       placeholder="ابحث عن صفحات، موظفين، أو أدوات... (Ctrl+K)" 
                       class="palette-input">
                <div class="esc-badge">ESC</div>
            </div>

            <div class="results-wrapper custom-scrollbar" #resultsList>
                <!-- Categories & Results -->
                <ng-container *ngFor="let cat of resultCategories">
                    <div class="category-header">{{ cat }}</div>
                    
                    <div *ngFor="let item of getResultsByCategory(cat); let i = index" 
                         class="palette-item"
                         [class.selected]="isItemSelected(item)"
                         (mouseenter)="setSelectionByItem(item)"
                         (click)="executeItem(item)">
                        <div class="item-icon-wrapper">
                            <i [class]="item.icon"></i>
                        </div>
                        <div class="item-content">
                            <span class="item-label">{{ item.label }}</span>
                            <span class="item-desc" *ngIf="item.description">{{ item.description }}</span>
                        </div>
                        <div class="item-shortcut" *ngIf="isItemSelected(item)">
                            <i class="pi pi-arrow-left text-xs"></i>
                        </div>
                    </div>
                </ng-container>

                <!-- No Results -->
                <div *ngIf="results.length === 0 && query" class="empty-state">
                    <i class="pi pi-search-minus text-4xl mb-3 text-gray-300"></i>
                    <p>لم نجد أي نتائج لـ "{{ query }}"</p>
                </div>
            </div>

            <div class="palette-footer">
                <div class="footer-tip">
                    <span class="key">ENTER</span> للذهاب
                </div>
                <div class="footer-tip">
                    <span class="key">↑↓</span> للتنقل
                </div>
                <div class="footer-tip">
                    <span class="key">CTRL+K</span> للفتح
                </div>
            </div>
        </div>
    </p-dialog>
    `,
    styles: [`
        :host ::ng-deep .command-palette-mask {
            backdrop-filter: blur(8px);
            background: rgba(0, 0, 0, 0.4);
        }

        :host ::ng-deep .command-palette-dialog {
            background: transparent;
            border: none;
            box-shadow: none;
            max-width: 650px;
            width: 95%;
            top: 15% !important;
        }

        .palette-container {
            background: rgba(255, 255, 255, 0.95);
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
            border: 1px solid rgba(255, 255, 255, 0.2);
        }

        :host-context(.dark) .palette-container,
        :host-context(.app-dark) .palette-container {
            background: rgba(31, 41, 55, 0.95);
            border-color: rgba(75, 85, 99, 0.3);
        }

        .search-wrapper {
            display: flex;
            align-items: center;
            padding: 1.25rem 1.5rem;
            border-bottom: 1px solid rgba(0, 0, 0, 0.05);
            position: relative;
        }

        :host-context(.dark) .search-wrapper,
        :host-context(.app-dark) .search-wrapper {
            border-bottom-color: rgba(255, 255, 255, 0.05);
        }

        .search-icon {
            font-size: 1.25rem;
            color: #6366f1;
            margin-left: 1rem;
        }

        .palette-input {
            flex: 1;
            background: transparent;
            border: none;
            outline: none;
            font-size: 1.1rem;
            color: var(--text-color);
            font-family: inherit;
        }

        .esc-badge {
            font-size: 0.65rem;
            padding: 2px 6px;
            border: 1px solid #ddd;
            border-radius: 4px;
            color: #999;
            font-weight: bold;
        }

        .results-wrapper {
            max-height: 400px;
            overflow-y: auto;
            padding: 0.5rem;
        }

        .category-header {
            font-size: 0.75rem;
            font-weight: 800;
            color: #9ea0a5;
            padding: 0.75rem 1rem 0.5rem;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }

        .palette-item {
            display: flex;
            align-items: center;
            padding: 0.75rem 1rem;
            border-radius: 10px;
            cursor: pointer;
            transition: all 0.2s;
            margin-bottom: 2px;
        }

        .palette-item.selected {
            background: #6366f1;
            color: white !important;
        }

        .item-icon-wrapper {
            width: 36px;
            height: 36px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(99, 102, 241, 0.1);
            border-radius: 8px;
            margin-left: 1rem;
            transition: inherit;
        }

        .palette-item.selected .item-icon-wrapper {
            background: rgba(255, 255, 255, 0.2);
            color: white;
        }

        .item-content {
            flex: 1;
            display: flex;
            flex-direction: column;
        }

        .item-label {
            font-weight: 600;
            font-size: 0.95rem;
        }

        .item-desc {
            font-size: 0.75rem;
            opacity: 0.7;
        }

        .palette-footer {
            padding: 0.75rem 1.5rem;
            background: rgba(0, 0, 0, 0.02);
            border-top: 1px solid rgba(0, 0, 0, 0.05);
            display: flex;
            gap: 1.5rem;
        }

        :host-context(.dark) .palette-footer,
        :host-context(.app-dark) .palette-footer {
            background: rgba(255, 255, 255, 0.02);
            border-top-color: rgba(255, 255, 255, 0.05);
        }

        .footer-tip {
            font-size: 0.7rem;
            color: #71717a;
            display: flex;
            align-items: center;
            gap: 0.4rem;
        }

        .key {
            background: rgba(0, 0, 0, 0.05);
            padding: 1px 4px;
            border-radius: 3px;
            font-weight: bold;
            font-family: monospace;
        }
        
        :host-context(.dark) .key,
        :host-context(.app-dark) .key {
            background: rgba(255, 255, 255, 0.1);
        }

        .empty-state {
            padding: 3rem 1rem;
            text-align: center;
            color: #a1a1aa;
        }

        .custom-scrollbar::-webkit-scrollbar {
            width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background: rgba(0,0,0,0.1);
            border-radius: 10px;
        }
    `]
})
export class CommandPaletteComponent implements OnInit, OnDestroy {
    @ViewChild('searchInput') searchInput!: ElementRef;
    @ViewChild('resultsList') resultsList!: ElementRef;

    visible = false;
    query = '';
    selectedIndex = 0;
    results: CommandItem[] = [];
    resultCategories: string[] = [];

    private allStaticItems: CommandItem[] = [];
    private employees: UserDto[] = [];
    private searchSubject = new Subject<string>();
    private destroy$ = new Subject<void>();

    constructor(
        private router: Router,
        public authService: AuthService,
        private userService: UserService,
        private layoutService: LayoutService
    ) { }

    ngOnInit() {
        this.initStaticItems();
        this.setupKeyboardListeners();
        this.setupSearchObservable();
        this.loadEmployees();

        // Listen to external triggers (e.g. from Topbar)
        this.layoutService.commandPaletteOpen$.pipe(
            takeUntil(this.destroy$)
        ).subscribe(() => {
            if (!this.visible) {
                this.togglePalette();
            }
        });
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }

    @HostListener('window:keydown', ['$event'])
    handleGlobalKeydown(event: KeyboardEvent) {
        if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
            event.preventDefault();
            this.togglePalette();
        }

        if (event.key === 'Escape' && this.visible) {
            this.visible = false;
        }
    }

    private initStaticItems() {
        const isAdmin = this.authService.isAdmin();
        const isSupervisor = this.authService.isSupervisor();

        this.allStaticItems = [
            { label: 'الرئيسية', icon: 'pi pi-home', route: '/', category: 'تنقل', description: 'الذهاب إلى لوحة التحكم الرئيسية' },
            { label: 'مهامي الشخصية', icon: 'pi pi-user', route: '/management/my-tasks', category: 'تنقل', description: 'عرض المهام المسندة إليّ' },
            { label: 'طلب صلاحية', icon: 'pi pi-shield', route: '/management/my-permissions', category: 'نظام', description: 'تقديم طلب صلاحية دخول قسم أو ميزة' },
            { label: 'الإعدادات', icon: 'pi pi-cog', route: '/settings', category: 'نظام', description: 'تعديل الملف الشخصي والمظهر' },
        ];

        if (isAdmin || isSupervisor) {
            this.allStaticItems.push(
                { label: 'إدارة المهام', icon: 'pi pi-check-square', route: '/management/tasks', category: 'تنقل', description: 'إسناد ومتابعة مهام الفريق' },
                { label: 'أداء الفريق', icon: 'pi pi-chart-bar', route: '/management/team-performance', category: 'تنقل', description: 'تحليل إنتاجية الموظفين وكشف العهد' }
            );
        }

        if (isAdmin) {
            this.allStaticItems.push(
                { label: 'طلبات الصلاحيات المعلقة', icon: 'pi pi-bell', route: '/management/pending-permissions', category: 'نظام', description: 'مراجعة طلبات دخول الأقسام للموظفين' },
                { label: 'سجل تسجيل الدخول', icon: 'pi pi-history', route: '/management/logins-admin', category: 'نظام', description: 'متابعة نشاط تسجيل الدخول للموظفين' },
                { label: 'تقرير الاستراحات', icon: 'pi pi-list', route: '/reports/daily-breaks', category: 'نظام', description: 'كشف الاستراحات اليومي والغياب' }
            );
        }

        this.results = [...this.allStaticItems];
        this.updateCategories();
    }

    private loadEmployees() {
        if (this.authService.isAdmin() || this.authService.isSupervisor()) {
            this.userService.getUsers().subscribe(users => {
                this.employees = users;
            });
        }
    }

    private setupSearchObservable() {
        this.searchSubject.pipe(
            debounceTime(150),
            distinctUntilChanged(),
            takeUntil(this.destroy$)
        ).subscribe(q => {
            this.performSearch(q);
        });
    }

    private performSearch(q: string) {
        if (!q.trim()) {
            this.results = [...this.allStaticItems];
            this.selectedIndex = 0;
            this.updateCategories();
            return;
        }

        const query = q.toLowerCase().trim();

        // Filter static items
        const filteredStatic = this.allStaticItems.filter(item =>
            item.label.toLowerCase().includes(query) ||
            item.description?.toLowerCase().includes(query)
        );

        // Filter employees
        const filteredEmployees: CommandItem[] = [];
        if (this.authService.isAdmin() || this.authService.isSupervisor()) {
            this.employees.filter(e =>
                e.fullName?.toLowerCase().includes(query) ||
                e.username?.toLowerCase().includes(query) ||
                e.code?.toString().includes(query)
            ).slice(0, 5).forEach(e => {
                filteredEmployees.push({
                    label: e.fullName || e.username || 'موظف',
                    icon: 'pi pi-user-edit',
                    category: 'موظفين',
                    description: `قسم: ${e.department || 'غير محدد'} | كود: ${e.code}`,
                    route: `/management/team-performance` // Quick jump to performance for this user (ideally with param)
                });
            });
        }

        this.results = [...filteredStatic, ...filteredEmployees];
        this.selectedIndex = 0;
        this.updateCategories();
    }

    onSearch(event: any) {
        this.searchSubject.next(this.query);
    }

    togglePalette() {
        this.visible = !this.visible;
        if (this.visible) {
            this.query = '';
            this.results = [...this.allStaticItems];
            this.selectedIndex = 0;
            this.updateCategories();
        }
    }

    onDialogShow() {
        setTimeout(() => {
            this.searchInput.nativeElement.focus();
        }, 100);
    }

    moveSelection(direction: number) {
        const nextIndex = this.selectedIndex + direction;
        if (nextIndex >= 0 && nextIndex < this.results.length) {
            this.selectedIndex = nextIndex;
            this.scrollToSelection();
        }
    }

    private scrollToSelection() {
        const activeItem = this.resultsList.nativeElement.querySelector('.palette-item.selected');
        if (activeItem) {
            activeItem.scrollIntoView({ block: 'nearest' });
        }
    }

    setSelectionByItem(item: CommandItem) {
        this.selectedIndex = this.results.indexOf(item);
    }

    executeItem(item: CommandItem) {
        if (!item) return;

        if (item.route) {
            this.router.navigate([item.route]);
            this.visible = false;
        } else if (item.action) {
            // handle custom actions
            this.visible = false;
        }
    }

    isItemSelected(item: CommandItem): boolean {
        return this.results[this.selectedIndex] === item;
    }

    getResultsByCategory(category: string): CommandItem[] {
        return this.results.filter(i => i.category === category);
    }

    private updateCategories() {
        const cats = new Set(this.results.map(i => i.category));
        this.resultCategories = Array.from(cats);
    }

    private setupKeyboardListeners() {
        // Most logic handled by HostListener or Input keydown
    }
}
