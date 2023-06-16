import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AutorI } from '../models/autor';
@Injectable({
  providedIn: 'root'
})
export class AutorService {
  api_uri_nodejs = 'http://localhost:4000';
  api_uri_django = 'http://localhost:8000';
  base_path = `${this.api_uri_nodejs}/autor/`
  constructor(
    private http:HttpClient
  ) { }

  getAllAutor():Observable<{autor:AutorI[]}>{
    return this.http
      .get<{autor:AutorI[]}>(this.base_path)
  }

  getOneAutor(id: number):Observable<{autor:AutorI[]}>{
    return this.http
      .get<{autor:AutorI[]}>(`${this.base_path}${id}`)
  }

  createAutor(data: any):Observable<AutorI>{
    return this.http.post<AutorI>(this.base_path, data)
  }

  updateAutor(id: number, data: AutorI): Observable<AutorI> {
    return this.http.put<AutorI>(`${this.base_path}${id}`, data);
  }

  deleteAutor(id: number): Observable<AutorI> {
    return this.http.delete<AutorI>(`${this.base_path}${id}`);
  }


}
