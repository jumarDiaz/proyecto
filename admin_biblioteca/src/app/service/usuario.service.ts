import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioI } from '../models/usuario';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  api_uri_nodejs = 'http://localhost:4000';
  api_uri_django = 'http://localhost:8000';
  base_path = `${this.api_uri_nodejs}/usuario/`
  constructor(
    private http:HttpClient
  ) { }

  getAllUsuario():Observable<{usuario:UsuarioI[]}>{
    return this.http
      .get<{usuario:UsuarioI[]}>(this.base_path)
  }

  getOneUsuario(id: number):Observable<{usuario:UsuarioI[]}>{
    return this.http
      .get<{usuario:UsuarioI[]}>(`${this.base_path}${id}`);
  }

  createUsuario(data: any):Observable<UsuarioI>{
    return this.http.post<UsuarioI>(this.base_path, data)
  }

  updateUsuario(id: number, data: UsuarioI): Observable<UsuarioI> {
    return this.http.put<UsuarioI>(`${this.base_path}${id}`, data);
  }

  deleteUsuario(id: number): Observable<UsuarioI> {
    return this.http.delete<UsuarioI>(`${this.base_path}${id}`);
  }


}
