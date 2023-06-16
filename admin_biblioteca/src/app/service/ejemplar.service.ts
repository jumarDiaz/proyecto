import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EjemplarI } from '../models/ejemplar';
@Injectable({
  providedIn: 'root'
})
export class EjemplarService {
  api_uri_nodejs = 'http://localhost:4000';
  api_uri_django = 'http://localhost:8000';
  base_path = `${this.api_uri_nodejs}/ejemplar/`
  constructor(
    private http:HttpClient
  ) { }

  getAllEjemplar():Observable<{ejemplar:EjemplarI[]}>{
    return this.http
      .get<{ejemplar:EjemplarI[]}>(this.base_path)
  }

  getOneEjemplar(id: number):Observable<{ejemplar:EjemplarI[]}>{
    return this.http
      .get<{ejemplar:EjemplarI[]}>(`${this.base_path}${id}`);
  }

  createEjempalr(data: any):Observable<EjemplarI>{
    return this.http.post<EjemplarI>(this.base_path, data)
  }

  updateEjemplar(id: number, data: EjemplarI): Observable<EjemplarI> {
    return this.http.put<EjemplarI>(`${this.base_path}${id}`, data);
  }

  deleteCliente(id: number): Observable<EjemplarI> {
    return this.http.delete<EjemplarI>(`${this.base_path}${id}`);
  }


}
