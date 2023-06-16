import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LibroI } from '../models/libro';

@Injectable({
  providedIn: 'root'
})
export class LibroService {
  api_uri_nodejs = 'http://localhost:4000';
  api_uri_django = 'http://localhost:8000';
  base_path = `${this.api_uri_nodejs}/libro/`;

  constructor(private http: HttpClient) {}

  getAllLibro(): Observable<{ libro: LibroI[] }> {
    return this.http.get<{ libro: LibroI[] }>(this.base_path);
  }

  getOneLibro(id: number): Observable<LibroI> {
    return this.http.get<LibroI>(`${this.base_path}/${id}`);
  }

  createLibro(data: LibroI): Observable<LibroI> {
    return this.http.post<LibroI>(this.base_path, data);
  }

  updateLibro(id: number, data: LibroI): Observable<LibroI> {
    return this.http.put<LibroI>(`${this.base_path}/${id}`, data);
  }

  // deleteCliente(id: number): Observable<UsuarioI> {
  //   return this.http.delete<UsuarioI>(`${this.base_path}/${id}`);
  // }
}
