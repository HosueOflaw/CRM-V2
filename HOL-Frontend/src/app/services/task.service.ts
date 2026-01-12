import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { CacheService, CacheOptions } from './cache.service';
import { tap } from 'rxjs/operators';

export enum TaskStatus {
    Pending = 'Pending',
    InProgress = 'InProgress',
    Completed = 'Completed',
    Cancelled = 'Cancelled'
}

export enum TaskPriority {
    Low = 'Low',
    Medium = 'Medium',
    High = 'High'
}

export interface EmployeeTaskDto {
    id: number;
    title: string;
    description: string;
    assignedToId: number;
    assignedToName: string;
    createdById: number;
    createdByName: string;
    department: string;
    dueDate: string; // ISO Date
    createdAt: string;
    completedAt?: string;
    status: TaskStatus;
    priority: TaskPriority;
    employeeComment?: string;
    supervisorComment?: string;
    isOverdue?: boolean; // Optional helper
}

export interface CreateTaskDto {
    title: string;
    description: string;
    assignedToId: number;
    dueDate: string;
    priority: TaskPriority;
}

export interface UpdateTaskStatusDto {
    status: TaskStatus;
    employeeComment?: string;
    supervisorComment?: string;
}

export interface UpdateTaskDto {
    title?: string;
    description?: string;
    assignedToId?: number;
    dueDate?: string;
    priority?: TaskPriority;
}

export interface TaskFilterParams {
    status?: TaskStatus;
    priority?: TaskPriority;
    assignedToId?: number;
    createdById?: number;
    startDate?: string;
    endDate?: string;
}

@Injectable({
    providedIn: 'root'
})
export class TaskService {
    private apiUrl = `${environment.apiUrl}/tasks`;
    private readonly CACHE_TTL = 5 * 60 * 1000; // 5 minutes

    constructor(
        private http: HttpClient,
        private cacheService: CacheService
    ) { }

    /**
     * Get all tasks with optional filters
     */
    getTasks(filters?: TaskFilterParams, forceRefresh: boolean = false): Observable<EmployeeTaskDto[]> {
        let params = new HttpParams();
        if (filters) {
            if (filters.status) params = params.set('status', filters.status);
            if (filters.priority) params = params.set('priority', filters.priority);
            if (filters.assignedToId) params = params.set('assignedToId', filters.assignedToId.toString());
            if (filters.createdById) params = params.set('createdById', filters.createdById.toString());
            if (filters.startDate) params = params.set('startDate', filters.startDate);
            if (filters.endDate) params = params.set('endDate', filters.endDate);
        }

        const cacheKey = `tasks_list_${params.toString()}`;
        const options: CacheOptions = {
            ttl: this.CACHE_TTL,
            forceRefresh,
            key: cacheKey
        };

        return this.cacheService.get(
            cacheKey,
            () => this.http.get<EmployeeTaskDto[]>(this.apiUrl, { params }),
            options
        );
    }

    /**
     * Get a single task by ID
     */
    getTaskById(id: number, forceRefresh: boolean = false): Observable<EmployeeTaskDto> {
        const cacheKey = `task_item_${id}`;
        const options: CacheOptions = {
            ttl: this.CACHE_TTL,
            forceRefresh,
            key: cacheKey
        };

        return this.cacheService.get(
            cacheKey,
            () => this.http.get<EmployeeTaskDto>(`${this.apiUrl}/${id}`),
            options
        );
    }

    /**
     * Create a new task
     */
    createTask(task: CreateTaskDto): Observable<EmployeeTaskDto> {
        return this.http.post<EmployeeTaskDto>(this.apiUrl, task).pipe(
            tap(() => this.clearTasksCache())
        );
    }

    /**
     * Update task details
     */
    updateTask(id: number, task: UpdateTaskDto): Observable<EmployeeTaskDto> {
        return this.http.put<EmployeeTaskDto>(`${this.apiUrl}/${id}`, task).pipe(
            tap(() => {
                this.cacheService.clear(`task_item_${id}`);
                this.clearTasksCache();
            })
        );
    }

    /**
     * Update task status only
     */
    updateStatus(id: number, status: TaskStatus, comment?: string, isSupervisor: boolean = false): Observable<void> {
        const payload: UpdateTaskStatusDto = {
            status,
            employeeComment: isSupervisor ? undefined : comment,
            supervisorComment: isSupervisor ? comment : undefined
        };
        return this.http.put<void>(`${this.apiUrl}/${id}/status`, payload).pipe(
            tap(() => {
                this.cacheService.clear(`task_item_${id}`);
                this.clearTasksCache();
            })
        );
    }

    /**
     * Delete a task
     */
    deleteTask(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
            tap(() => {
                this.cacheService.clear(`task_item_${id}`);
                this.clearTasksCache();
            })
        );
    }

    /**
     * Clear all tasks related cache
     */
    private clearTasksCache(): void {
        this.cacheService.clearByPattern('tasks_list');
    }

    // Helper methods for UI
    getStatusColor(status: string): 'success' | 'info' | 'warn' | 'danger' | 'secondary' | 'contrast' | undefined {
        switch (status) {
            case TaskStatus.Completed: return 'success';
            case TaskStatus.InProgress: return 'info';
            case TaskStatus.Pending: return 'warn';
            case TaskStatus.Cancelled: return 'danger';
            default: return 'secondary';
        }
    }

    getPriorityColor(priority: string): 'success' | 'info' | 'warn' | 'danger' | 'secondary' | 'contrast' | undefined {
        switch (priority) {
            case TaskPriority.High: return 'danger';
            case TaskPriority.Medium: return 'warn';
            case TaskPriority.Low: return 'info';
            default: return 'secondary';
        }
    }

    getStatusLabel(status: TaskStatus): string {
        switch (status) {
            case TaskStatus.Pending: return 'قيد الانتظار';
            case TaskStatus.InProgress: return 'جاري التنفيذ';
            case TaskStatus.Completed: return 'مكتملة';
            case TaskStatus.Cancelled: return 'ملغاة';
            default: return status;
        }
    }

    getPriorityLabel(priority: TaskPriority): string {
        switch (priority) {
            case TaskPriority.High: return 'عاجل';
            case TaskPriority.Medium: return 'متوسط';
            case TaskPriority.Low: return 'عادي';
            default: return priority;
        }
    }
}
