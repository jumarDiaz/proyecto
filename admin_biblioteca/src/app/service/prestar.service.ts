import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PrestarI } from '../models/prestar';
@Injectable({
  providedIn: 'root'
})
export class PrestarService {
  api_uri_nodejs = 'http://localhost:4000';
  api_uri_django = 'http://localhost:8000';
  base_path = `${this.api_uri_nodejs}/prestar/`
  constructor(
    private http:HttpClient
  ) { }

  getAllPrestar():Observable<{prestar:PrestarI[]}>{
    return this.http
      .get<{prestar:PrestarI[]}>(this.base_path)
  }

  getOnePrestar(id: number):Observable<{prestar:PrestarI[]}>{
    return this.http
      .get<{prestar:PrestarI[]}>(`${this.base_path}${id}`);
  }

  createPrestar(data: any):Observable<PrestarI>{
    return this.http.post<PrestarI>(this.base_path, data)
  }

  updatePrestar(id: number, data: any): Observable<PrestarI> {
    return this.http.put<PrestarI>(`${this.base_path}${id}`, data);
  }

  deletePrestar(id: number): Observable<PrestarI> {
    return this.http.delete<PrestarI>(`${this.base_path}${id}`);
  }


}
