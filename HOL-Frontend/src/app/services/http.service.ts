import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { CacheService, CacheOptions } from './cache.service';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(
    private http: HttpClient,
    private cacheService: CacheService
  ) {}

  BASE_URL = environment.apiUrl;
  
  private getHeaders() {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : '',
    });
  }

  /**
   * GET request with optional caching
   * @param endpoint API endpoint
   * @param options Cache options (if provided, caching will be enabled)
   */
  public get<T = any>(endpoint: string, options?: CacheOptions): Observable<T> {
    const cacheKey = `GET_${endpoint}`;
    
    // If cache options provided, use caching
    if (options !== undefined) {
      return this.cacheService.get(
        cacheKey,
        () => this.httpRequest<T>(endpoint, 'get'),
        { ...options, key: cacheKey }
      );
    }
    
    // Otherwise, normal request without cache
    return this.httpRequest<T>(endpoint, 'get');
  }

  /**
   * POST request (no caching by default, as POST usually modifies data)
   * @param endpoint API endpoint
   * @param data Request body
   * @param clearCachePattern Optional pattern to clear cache after POST
   */
  public post<T = any>(endpoint: string, data?: any, clearCachePattern?: string): Observable<T> {
    const result = this.httpRequest<T>(endpoint, 'post', data);
    
    // Clear cache if pattern provided
    if (clearCachePattern) {
      result.subscribe({
        next: () => this.cacheService.clearByPattern(clearCachePattern),
        error: () => {} // Don't clear cache on error
      });
    }
    
    return result;
  }

  /**
   * PUT request (no caching by default, as PUT usually modifies data)
   * @param endpoint API endpoint
   * @param data Request body
   * @param clearCachePattern Optional pattern to clear cache after PUT
   */
  public put<T = any>(endpoint: string, data: any, clearCachePattern?: string): Observable<T> {
    const result = this.httpRequest<T>(endpoint, 'put', data);
    
    // Clear cache if pattern provided
    if (clearCachePattern) {
      result.subscribe({
        next: () => this.cacheService.clearByPattern(clearCachePattern),
        error: () => {} // Don't clear cache on error
      });
    }
    
    return result;
  }

  /**
   * DELETE request (no caching by default, as DELETE modifies data)
   * @param endpoint API endpoint
   * @param data Request body
   * @param clearCachePattern Optional pattern to clear cache after DELETE
   */
  public delete<T = any>(endpoint: string, data?: any, clearCachePattern?: string): Observable<T> {
    const result = this.httpRequest<T>(endpoint, 'delete', data);
    
    // Clear cache if pattern provided
    if (clearCachePattern) {
      result.subscribe({
        next: () => this.cacheService.clearByPattern(clearCachePattern),
        error: () => {} // Don't clear cache on error
      });
    }
    
    return result;
  }

  private httpRequest<T>(endpoint: string, method: string, data: any = null): Observable<T> {
    const options = {
      body: data,
      headers: this.getHeaders(),
    };
    return this.http.request<T>(method, `${this.BASE_URL}${endpoint}`, options);
  }

  /**
   * Clear cache for specific endpoint pattern
   */
  public clearCache(pattern: string): void {
    this.cacheService.clearByPattern(pattern);
  }

  /**
   * Clear all cache
   */
  public clearAllCache(): void {
    this.cacheService.clearAll();
  }
}