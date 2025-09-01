// generic-api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenericApiService {

  constructor(private http: HttpClient) {}

  // Generic method to get data of type T
  getData<T>(url: string): Observable<T[]> {
    return this.http.get<T[]>(url);
  }

  // Generic method to get single item of type T
  getItem<T>(url: string, id: number): Observable<T> {
    return this.http.get<T>(`${url}/${id}`);
  }
}
