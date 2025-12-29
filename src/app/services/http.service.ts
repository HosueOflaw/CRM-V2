import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  BASE_URL = environment.apiUrl;
  
  private getHeaders() {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : '',
    });
  }

  public get(endpoint: string, data?: any) {
    return this.httpRequest(endpoint, 'get', data);
  }

  public post(endpoint: string, data?: any) {
    return this.httpRequest(endpoint, 'post', data);
  }

  public put(endpoint: string, data: any) {
    return this.httpRequest(endpoint, 'put', data);
  }

  public delete(endpoint: string, data: any) {
    return this.httpRequest(endpoint, 'delete', data);
  }

  private httpRequest(endpoint: string, method: string, data: any = null) {
    const options = {
      body: data,
      headers: this.getHeaders(),
    };
    return this.http.request(method, `${this.BASE_URL}${endpoint}`, options);
  }
}