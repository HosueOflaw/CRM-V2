import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
    providedIn: 'root'
})
export class MainfileService {
    private endpoint = 'Mainfiles';

    constructor(private http: HttpService) { }

    searchMainfiles(query: string): Observable<any[]> {
        return this.http.get(`${this.endpoint}?search=${encodeURIComponent(query)}`);
    }

    getMainfileByCode(code: number): Observable<any> {
        return this.http.get(`${this.endpoint}/code/${code}`);
    }

    getMainfileById(id: number): Observable<any> {
        return this.http.get(`${this.endpoint}/${id}`);
    }
}
