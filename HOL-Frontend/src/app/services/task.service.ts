import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

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

    constructor(private http: HttpClient) { }

    /**
     * Get all tasks with optional filters
     * GET /api/tasks?status=Pending&priority=High
     */
    getTasks(filters?: TaskFilterParams): Observable<EmployeeTaskDto[]> {
        let params = new HttpParams();

        if (filters) {
            if (filters.status) params = params.set('status', filters.status);
            if (filters.priority) params = params.set('priority', filters.priority);
            if (filters.assignedToId) params = params.set('assignedToId', filters.assignedToId.toString());
            if (filters.createdById) params = params.set('createdById', filters.createdById.toString());
            if (filters.startDate) params = params.set('startDate', filters.startDate);
            if (filters.endDate) params = params.set('endDate', filters.endDate);
        }

        return this.http.get<EmployeeTaskDto[]>(this.apiUrl, { params });
    }

    /**
     * Get a single task by ID
     * GET /api/tasks/5
     */
    getTaskById(id: number): Observable<EmployeeTaskDto> {
        return this.http.get<EmployeeTaskDto>(`${this.apiUrl}/${id}`);
    }

    /**
     * Create a new task
     * POST /api/tasks
     */
    createTask(task: CreateTaskDto): Observable<EmployeeTaskDto> {
        return this.http.post<EmployeeTaskDto>(this.apiUrl, task);
    }

    /**
     * Update task details (title, description, etc.)
     * PUT /api/tasks/5
     */
    updateTask(id: number, task: UpdateTaskDto): Observable<EmployeeTaskDto> {
        return this.http.put<EmployeeTaskDto>(`${this.apiUrl}/${id}`, task);
    }

    /**
     * Update task status only
     * PUT /api/tasks/5/status
     */
    updateStatus(id: number, status: TaskStatus, comment?: string, isSupervisor: boolean = false): Observable<void> {
        const payload: UpdateTaskStatusDto = {
            status,
            employeeComment: isSupervisor ? undefined : comment,
            supervisorComment: isSupervisor ? comment : undefined
        };
        return this.http.put<void>(`${this.apiUrl}/${id}/status`, payload);
    }

    /**
     * Delete a task
     * DELETE /api/tasks/5
     */
    deleteTask(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
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
