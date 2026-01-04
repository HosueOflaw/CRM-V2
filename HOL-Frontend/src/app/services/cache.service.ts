import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject, throwError } from 'rxjs';
import { shareReplay, catchError, tap } from 'rxjs/operators';

export interface CacheOptions {
  ttl?: number; // Time to live in milliseconds (default: 5 minutes)
  forceRefresh?: boolean; // Force refresh even if cache exists
  key?: string; // Custom cache key (auto-generated if not provided)
}

interface CacheEntry<T> {
  data: T;
  timestamp: number;
  ttl: number;
}

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  private cache = new Map<string, CacheEntry<any>>();
  private pendingRequests = new Map<string, Observable<any>>();
  private readonly DEFAULT_TTL = 5 * 60 * 1000; // 5 minutes

  /**
   * Get cached data or execute request
   * @param key Cache key
   * @param requestFactory Function that returns Observable (only called if cache miss)
   * @param options Cache options
   */
  get<T>(
    key: string,
    requestFactory: () => Observable<T>,
    options: CacheOptions = {}
  ): Observable<T> {
    const cacheKey = options.key || key;
    const ttl = options.ttl || this.DEFAULT_TTL;
    const forceRefresh = options.forceRefresh || false;

    // Check if there's a pending request for this key
    if (this.pendingRequests.has(cacheKey)) {
      return this.pendingRequests.get(cacheKey)!;
    }

    // Check cache if not forcing refresh
    if (!forceRefresh) {
      const cached = this.cache.get(cacheKey);
      if (cached && this.isValid(cached, ttl)) {
        return of(cached.data);
      }
    }

    // Create new request
    const request = requestFactory().pipe(
      tap(data => {
        // Store in cache
        this.cache.set(cacheKey, {
          data,
          timestamp: Date.now(),
          ttl
        });
        // Remove from pending requests
        this.pendingRequests.delete(cacheKey);
      }),
      catchError(error => {
        // Remove from pending requests on error
        this.pendingRequests.delete(cacheKey);
        return throwError(() => error);
      }),
      shareReplay(1) // Share the result with multiple subscribers
    );

    // Store pending request
    this.pendingRequests.set(cacheKey, request);

    return request;
  }

  /**
   * Check if cache entry is still valid
   */
  private isValid<T>(entry: CacheEntry<T>, ttl: number): boolean {
    const age = Date.now() - entry.timestamp;
    return age < ttl;
  }

  /**
   * Clear specific cache entry
   */
  clear(key: string): void {
    this.cache.delete(key);
    this.pendingRequests.delete(key);
  }

  /**
   * Clear all cache
   */
  clearAll(): void {
    this.cache.clear();
    this.pendingRequests.clear();
  }

  /**
   * Clear cache by pattern (e.g., 'users' will clear all keys starting with 'users')
   */
  clearByPattern(pattern: string): void {
    const keysToDelete: string[] = [];
    this.cache.forEach((value, key) => {
      if (key.includes(pattern)) {
        keysToDelete.push(key);
      }
    });
    keysToDelete.forEach(key => {
      this.cache.delete(key);
      this.pendingRequests.delete(key);
    });
  }

  /**
   * Check if cache exists and is valid
   */
  has(key: string, ttl?: number): boolean {
    const cached = this.cache.get(key);
    if (!cached) return false;
    const cacheTTL = ttl || cached.ttl;
    return this.isValid(cached, cacheTTL);
  }

  /**
   * Get cache size
   */
  getSize(): number {
    return this.cache.size;
  }

  /**
   * Clean expired cache entries
   */
  cleanExpired(): void {
    const now = Date.now();
    const keysToDelete: string[] = [];
    
    this.cache.forEach((entry, key) => {
      if (now - entry.timestamp >= entry.ttl) {
        keysToDelete.push(key);
      }
    });
    
    keysToDelete.forEach(key => {
      this.cache.delete(key);
      this.pendingRequests.delete(key);
    });
  }
}

