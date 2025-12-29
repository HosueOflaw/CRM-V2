import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface CreateUserDto {
  username: string;
  fullName?: string;
  email?: string;
  role?: string;
  password: string;
  code?: number;
}

export interface UpdateUserDto {
  username?: string;
  fullName?: string;
  email?: string;
  role?: string;
  code?: number;
}

export interface UserDto {
  id: number;
  code?: number;
  username?: string;
  fullName?: string;
  email?: string;
  role?: string;
  createdAt?: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = `${environment.apiUrl}/Users`;

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : '',
    });
  }

  // Get all users
  getUsers(): Observable<UserDto[]> {
    return this.http.get<UserDto[]>(this.apiUrl, { headers: this.getHeaders() });
  }

  // Get user by ID
  getUserById(id: number): Observable<UserDto> {
    return this.http.get<UserDto>(`${this.apiUrl}/${id}`, { headers: this.getHeaders() });
  }

  // Create new user
  createUser(userData: CreateUserDto): Observable<UserDto> {
    return this.http.post<UserDto>(this.apiUrl, userData, { headers: this.getHeaders() });
  }

  // Update user
  updateUser(id: number, userData: UpdateUserDto): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, userData, { headers: this.getHeaders() });
  }

  // Delete user
  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, { headers: this.getHeaders() });
  }

  // Get user by username
  getUserByUsername(username: string): Observable<UserDto> {
    return this.http.get<UserDto>(`${this.apiUrl}/username/${username}`, { headers: this.getHeaders() });
  }

  // Get users by role
  getUsersByRole(role: string): Observable<UserDto[]> {
    return this.http.get<UserDto[]>(`${this.apiUrl}/role/${role}`, { headers: this.getHeaders() });
  }

  // Change password
  changePassword(userId: number, oldPassword: string, newPassword: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/change-password`, {
      userId,
      oldPassword,
      newPassword
    }, { headers: this.getHeaders() });
  }
}
