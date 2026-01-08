import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface PermissionRequest {
    id?: number;
    userId: number;
    userName?: string;
    fullName?: string;
    department?: string;
    requestType: 'Department' | 'Feature';
    requestedValue: string; // e.g., 'Finance' or 'edit_salary'
    reason: string;
    status: 'Pending' | 'Approved' | 'Rejected';
    createdAt?: string;
    adminComment?: string;
}

@Injectable({
    providedIn: 'root'
})
export class PermissionService {
    private apiUrl = `${environment.apiUrl}/permissions`;

    constructor(private http: HttpClient) { }

    // For User/Supervisor: Send a new request
    sendRequest(request: Partial<PermissionRequest>): Observable<any> {
        return this.http.post(`${this.apiUrl}/request`, request);
    }

    // For User/Supervisor: View their own requests
    getMyRequests(): Observable<PermissionRequest[]> {
        return this.http.get<PermissionRequest[]>(`${this.apiUrl}/my-requests`);
    }

    // For Admin: View all pending requests
    getPendingRequests(): Observable<PermissionRequest[]> {
        return this.http.get<PermissionRequest[]>(`${this.apiUrl}/pending`);
    }

    // For Admin: Approve or Reject a request
    processRequest(requestId: number, status: 'Approved' | 'Rejected', comment: string): Observable<any> {
        return this.http.post(`${this.apiUrl}/process`, {
            requestId,
            approved: status === 'Approved',
            adminComment: comment
        });
    }

    // For Supervisor: Delegate a permission to an employee
    delegatePermission(employeeId: number, departments: string, features: string): Observable<any> {
        return this.http.post(`${this.apiUrl}/delegate`, {
            employeeId,
            accessibleDepartments: departments,
            accessibleFeatures: features
        });
    }
}
