import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { AuthService } from '../../../../core/services/auth';
import { TaskService, EmployeeTaskDto, TaskStatus } from '../../../../services/task.service';
import { BreakService, BreakStatus, ActiveBreak, DailyBreakReport } from '../../../../services/break.service';
import { UserService, UserDto } from '../../../../services/user.service';
import { PermissionService } from '../../../../core/services/permission.service';
import { SkeletonModule } from 'primeng/skeleton';
import Swal from 'sweetalert2';

interface DashboardStats {
  todayTasks: number;
  pendingTasks: number;
  completedThisWeek: number;
  inProgressTasks: number;
}

interface TeamStats {
  activeEmployees: number;
  employeesOnBreak: number;
  activeTasks: number;
  pendingRequests: number;
}

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  imports: [RouterModule, CommonModule, InputTextModule, ButtonModule, CardModule, TagModule, SkeletonModule],
})
export class HomePage implements OnInit {
  currentUser: any;
  loading = true;

  // Employee Stats
  dashboardStats: DashboardStats = {
    todayTasks: 0,
    pendingTasks: 0,
    completedThisWeek: 0,
    inProgressTasks: 0
  };

  todayTasks: EmployeeTaskDto[] = [];
  isOnBreak = false;
  todayBreakCompleted = false;
  breakTimeRemaining = '';

  // Supervisor Stats
  teamStats: TeamStats = {
    activeEmployees: 0,
    employeesOnBreak: 0,
    activeTasks: 0,
    pendingRequests: 0
  };

  // Keep navigation for quick access
  filteredDepartments: any[] = [];
  departments = [
    { name: 'المفاوضات', icon: '📞', route: '/negotiations', color: 'primary', key: 'negotiations' },
    { name: 'الشؤون الإدارية', icon: '👥', route: '/management', color: 'secondary', key: 'management' },
    { name: 'المالية', icon: '💰', route: '/finance', color: 'accent', key: 'finance' },
    { name: 'التقارير', icon: '📊', route: '/reports', color: 'info', key: 'reports' },
    { name: 'السيارات', icon: '🚗', route: '/car-management', color: 'warning', key: 'car-management' },
    { name: 'السكرتارية', icon: '📝', route: '/secretariat', color: 'success', key: 'secretariat' },
    { name: 'التنفيذ', icon: '⚙️', route: '/execution', color: 'error', key: 'execution' },
    { name: 'المداولات', icon: '⚖️', route: '/discussions', color: 'help', key: 'discussions' },
  ];

  constructor(
    public authService: AuthService,
    private taskService: TaskService,
    private breakService: BreakService,
    private userService: UserService,
    private permissionService: PermissionService
  ) {
    this.currentUser = this.authService.getUser();
  }

  ngOnInit() {
    this.filterDepartments();
    this.loadDashboardData();

    // Subscribe to reactive break refreshes
    this.breakService.refresh$.subscribe(() => {
      this.loadBreakStatus();
    });
  }

  filterDepartments() {
    const isAdmin = this.authService.isAdmin();
    const isEmployee = this.authService.isEmployee();
    const userDep = (this.authService.getUserDepartment() || '').toLowerCase().trim();

    if (isAdmin) {
      this.filteredDepartments = this.departments;
    } else if (isEmployee) {
      // Basic filtering based on user department
      this.filteredDepartments = this.departments.filter(d =>
        userDep.includes(d.key) || d.name.includes(userDep)
      );
    }
  }

  loadDashboardData() {
    this.loading = true;

    // We'll use a simple counter to track multiple async calls
    let loadersCount = 0;
    const TOTAL_LOADERS = (this.authService.isSupervisor() || this.authService.isAdmin()) ? 3 : 2;

    const checkLoading = () => {
      loadersCount++;
      if (loadersCount >= TOTAL_LOADERS) {
        this.loading = false;
      }
    };

    // Always load personal stats if applicable
    this.loadTaskStats(checkLoading);
    this.loadBreakStatus(checkLoading);

    // Load team stats for supervisors/admins
    if (this.authService.isSupervisor() || this.authService.isAdmin()) {
      this.loadTeamStats(checkLoading);
    }
  }

  loadTaskStats(callback?: () => void) {
    const today = new Date();
    const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const endOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 23, 59, 59);

    // Get today's tasks
    this.taskService.getTasks({
      startDate: startOfDay.toISOString(),
      endDate: endOfDay.toISOString()
    }).subscribe({
      next: (tasks) => {
        const myTasks = tasks.filter(t => t.assignedToId === this.currentUser?.id);
        this.todayTasks = myTasks.slice(0, 5);
        this.dashboardStats.todayTasks = myTasks.length;
        this.dashboardStats.pendingTasks = myTasks.filter(t => t.status === TaskStatus.Pending).length;
        this.dashboardStats.inProgressTasks = myTasks.filter(t => t.status === TaskStatus.InProgress).length;
        if (callback) callback();
      },
      error: () => { if (callback) callback(); }
    });

    // Get completed tasks this week (optional independent call)
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay());

    this.taskService.getTasks({
      startDate: startOfWeek.toISOString(),
      status: TaskStatus.Completed
    }).subscribe({
      next: (tasks) => {
        this.dashboardStats.completedThisWeek = tasks.filter(t => t.assignedToId === this.currentUser?.id).length;
      }
    });
  }

  loadBreakStatus(callback?: () => void) {
    this.breakService.getStatus().subscribe({
      next: (status: BreakStatus) => {
        this.isOnBreak = status.isOnBreak;
        if (this.isOnBreak && status.startTime && status.durationMinutes) {
          const startTime = new Date(status.startTime);
          const now = new Date();
          const elapsed = Math.floor((now.getTime() - startTime.getTime()) / 1000);
          const totalSeconds = (status.durationMinutes || 0) * 60;
          const remaining = Math.max(0, totalSeconds - elapsed);

          const minutes = Math.floor(remaining / 60);
          const seconds = remaining % 60;
          this.breakTimeRemaining = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        }

        // If not on break, check if it was completed today
        const today = new Date().toISOString().split('T')[0];
        const userId = this.currentUser?.id || this.currentUser?.userId;
        const storageKey = `break_completed_${userId}_${today}`;

        // Check local storage first as a fast fallback/sync
        if (localStorage.getItem(storageKey) === 'true') {
          this.todayBreakCompleted = true;
          console.log('✅ Home: Daily break confirmed from local storage.');
          if (callback) callback();
          return;
        }

        if (!this.isOnBreak) {
          this.breakService.getDailyReport(today).subscribe({
            next: (reports: DailyBreakReport[]) => {
              const currentId = userId;

              const myReport = reports.find((r: DailyBreakReport) => {
                const rAny = r as any;
                const rId = rAny.userId || rAny.UserId || rAny.id || rAny.Id;
                return String(rId) === String(currentId);
              });

              if (myReport) {
                const myReportAny = myReport as any;
                const isCompFlag = myReportAny.isCompleted === true || myReportAny.IsCompleted === true ||
                  String(myReportAny.isCompleted) === 'True' || String(myReportAny.IsCompleted) === 'True' ||
                  String(myReportAny.isCompleted) === 'true' || String(myReportAny.IsCompleted) === 'true';

                const endTime = myReportAny.endTime || myReportAny.EndTime;
                const hasEndTime = endTime && String(endTime) !== '0001-01-01T00:00:00' && String(endTime) !== '0001-01-01 00:00:00';

                if (isCompFlag || hasEndTime) {
                  this.todayBreakCompleted = true;
                  localStorage.setItem(storageKey, 'true'); // Sync to local storage
                  console.log('✅ Home: Daily break confirmed as completed.', { currentId, report: myReport });
                }
              }
              if (callback) callback();
            },
            error: (err: any) => {
              console.warn('⚠️ Home: Failed to load daily report (likely permission restricted). Using local state only.', err);
              if (callback) callback();
            }
          });
        } else {
          if (callback) callback();
        }
      },
      error: (err: any) => {
        console.error('Failed to load break status', err);
        this.isOnBreak = false;
        if (callback) callback();
      }
    });
  }

  loadTeamStats(callback?: () => void) {
    let internalCount = 0;
    const TOTAL_INTERNAL = this.authService.isAdmin() ? 4 : 3;
    const checkInternal = () => {
      internalCount++;
      if (internalCount >= TOTAL_INTERNAL && callback) callback();
    };

    // Active Employees
    this.userService.getUsers().subscribe({
      next: (users: UserDto[]) => {
        this.teamStats.activeEmployees = users.length;
        checkInternal();
      },
      error: () => checkInternal()
    });

    // Employees on Break
    this.breakService.getActiveBreaks().subscribe({
      next: (breaks: ActiveBreak[]) => {
        this.teamStats.employeesOnBreak = breaks.length;
        checkInternal();
      },
      error: () => checkInternal()
    });

    // Active Tasks
    this.taskService.getTasks({ status: TaskStatus.InProgress }).subscribe({
      next: (tasks: EmployeeTaskDto[]) => {
        this.teamStats.activeTasks = tasks.length;
        checkInternal();
      },
      error: () => checkInternal()
    });

    // Pending Requests
    if (this.authService.isAdmin()) {
      this.permissionService.getPendingRequests().subscribe({
        next: requests => {
          this.teamStats.pendingRequests = requests.length;
          checkInternal();
        },
        error: () => checkInternal()
      });
    }
  }

  getStatusSeverity(status: TaskStatus): 'success' | 'info' | 'warn' | 'danger' | 'secondary' | 'contrast' | undefined {
    return this.taskService.getStatusColor(status);
  }

  getStatusLabel(status: TaskStatus): string {
    return this.taskService.getStatusLabel(status);
  }

  getPrioritySeverity(priority: string): 'success' | 'info' | 'warn' | 'danger' | 'secondary' | 'contrast' | undefined {
    return this.taskService.getPriorityColor(priority);
  }

  startBreak() {
    Swal.fire({
      title: 'بدء ساعة الراحة؟',
      text: 'هل أنت متأكد من رغبتك في بدء وقت الاستراحة الآن؟',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#10b981',
      cancelButtonColor: '#6b7280',
      confirmButtonText: 'نعم، ابدأ',
      cancelButtonText: 'إلغاء',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.breakService.startBreak().subscribe({
          next: () => {
            this.isOnBreak = true;
            this.loadBreakStatus();
          },
          error: (err: any) => {
            const msg = err.error?.message || 'فشل بدء الراحة';
            Swal.fire('خطأ', msg, 'error');
          }
        });
      }
    });
  }

  endBreak() {
    Swal.fire({
      title: 'إنهاء الاستراحة؟',
      text: 'هل أنت متأكد من العودة للعمل الآن؟',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#f59e0b',
      cancelButtonColor: '#6b7280',
      confirmButtonText: 'نعم، عودة للعمل',
      cancelButtonText: 'إلغاء',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.breakService.endBreak().subscribe({
          next: () => {
            const today = new Date().toISOString().split('T')[0];
            const userId = this.currentUser?.id || this.currentUser?.userId;
            localStorage.setItem(`break_completed_${userId}_${today}`, 'true');
            this.todayBreakCompleted = true;
            this.isOnBreak = false;
            this.loadBreakStatus();
          },
          error: (err: any) => {
            const msg = err.error?.message || 'فشل إنهاء الاستراحة';
            Swal.fire('خطأ', msg, 'error');
          }
        });
      }
    });
  }
}
