import { Component,OnInit } from '@angular/core';
import { UsuarioI } from 'src/app/models/usuario';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-usuario-read',
  templateUrl: './usuario-read.component.html',
  styleUrls: ['./usuario-read.component.css']
})
export class UsuarioReadComponent implements OnInit{
  public usuarios:UsuarioI[] = [];
  // public displayedColumns: string[] = ["id", "nombre", "apellido", "direccion", "telefono"]
  constructor(
    private UsuarioService: UsuarioService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.mostrarUsuarios()
  }

  mostrarUsuarios() {
    this.UsuarioService.getAllUsuario()
      .subscribe({
        next: (data) => {
          this.usuarios = data.usuario
          console.log(this.usuarios)
        }
      })
  }
}
