import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrideService {

  private baseUrl = 'http://localhost:3001/api/bride';

  constructor(private http: HttpClient) { }

  getBride(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createBride(bride: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, bride);
  }

  updateBride(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteBride(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getBrideList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getBrideRangeList(start: number, end: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${start}/${end}`);
  }
}
