import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { CacheService, CacheOptions } from './cache.service';

export interface CreateUserDto {
  username: string;
  fullName?: string;
  email?: string;
  role?: string;
  department?: string;
  password: string;
  code?: number;
}

export interface UpdateUserDto {
  username?: string;
  fullName?: string;
  email?: string;
  role?: string;
  department?: string;
  code?: number;
}

export interface UserDto {
  id: number;
  code?: number;
  username?: string;
  fullName?: string;
  email?: string;
  role?: string;
  department?: string;
  createdAt?: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = `${environment.apiUrl}/Users`;
  private readonly CACHE_TTL = 5 * 60 * 1000; // 5 minutes

  constructor(
    private http: HttpClient,
    private cacheService: CacheService
  ) { }

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : '',
    });
  }

  /**
   * Get all users with caching
   * @param forceRefresh Force refresh from server
   */
  getUsers(forceRefresh: boolean = false): Observable<UserDto[]> {
    const cacheKey = 'users_all';
    const options: CacheOptions = {
      ttl: this.CACHE_TTL,
      forceRefresh,
      key: cacheKey
    };

    return this.cacheService.get(
      cacheKey,
      () => this.http.get<UserDto[]>(this.apiUrl, { headers: this.getHeaders() }),
      options
    );
  }

  /**
   * Get user by ID with caching
   * @param id User ID
   * @param forceRefresh Force refresh from server
   */
  getUserById(id: number, forceRefresh: boolean = false): Observable<UserDto> {
    const cacheKey = `user_${id}`;
    const options: CacheOptions = {
      ttl: this.CACHE_TTL,
      forceRefresh,
      key: cacheKey
    };

    return this.cacheService.get(
      cacheKey,
      () => this.http.get<UserDto>(`${this.apiUrl}/${id}`, { headers: this.getHeaders() }),
      options
    );
  }

  /**
   * Create new user (clears users cache)
   */
  createUser(userData: CreateUserDto): Observable<UserDto> {
    return this.http.post<UserDto>(this.apiUrl, userData, { headers: this.getHeaders() }).pipe(
      // Clear users cache after successful creation
      tap(() => {
        this.cacheService.clearByPattern('users');
        this.cacheService.clearByPattern('user_');
      })
    );
  }

  /**
   * Update user (clears specific user cache and users list cache)
   */
  updateUser(id: number, userData: UpdateUserDto): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, userData, { headers: this.getHeaders() }).pipe(
      // Clear cache after successful update
      tap(() => {
        this.cacheService.clear(`user_${id}`);
        this.cacheService.clearByPattern('users');
      })
    );
  }

  /**
   * Delete user (clears cache)
   */
  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, { headers: this.getHeaders() }).pipe(
      // Clear cache after successful deletion
      tap(() => {
        this.cacheService.clear(`user_${id}`);
        this.cacheService.clearByPattern('users');
      })
    );
  }

  /**
   * Get user by username with caching
   * @param username Username
   * @param forceRefresh Force refresh from server
   */
  getUserByUsername(username: string, forceRefresh: boolean = false): Observable<UserDto> {
    const cacheKey = `user_username_${username}`;
    const options: CacheOptions = {
      ttl: this.CACHE_TTL,
      forceRefresh,
      key: cacheKey
    };

    return this.cacheService.get(
      cacheKey,
      () => this.http.get<UserDto>(`${this.apiUrl}/username/${username}`, { headers: this.getHeaders() }),
      options
    );
  }

  /**
   * Get users by role with caching
   * @param role User role
   * @param forceRefresh Force refresh from server
   */
  getUsersByRole(role: string, forceRefresh: boolean = false): Observable<UserDto[]> {
    const cacheKey = `users_role_${role}`;
    const options: CacheOptions = {
      ttl: this.CACHE_TTL,
      forceRefresh,
      key: cacheKey
    };

    return this.cacheService.get(
      cacheKey,
      () => this.http.get<UserDto[]>(`${this.apiUrl}/role/${role}`, { headers: this.getHeaders() }),
      options
    );
  }

  /**
   * Change password (no caching needed)
   */
  changePassword(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/change-password`, data, { headers: this.getHeaders() });
  }

  /**
   * Clear all users cache
   */
  clearUsersCache(): void {
    this.cacheService.clearByPattern('users');
    this.cacheService.clearByPattern('user_');
  }
}
