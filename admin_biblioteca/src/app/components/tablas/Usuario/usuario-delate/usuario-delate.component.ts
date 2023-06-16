import { Component, OnInit } from '@angular/core';
import { UsuarioI } from 'src/app/models/usuario';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario.service';
import {Message,MessageService} from 'primeng/api';

@Component({
  selector: 'app-usuario-delate',
  templateUrl: './usuario-delate.component.html',
  styleUrls: ['./usuario-delate.component.css']
})
export class UsuarioDelateComponent implements OnInit{
  public usuarios:UsuarioI[] = []
  public msgs1: Message[]=[];
  constructor(
    private UsuarioService: UsuarioService,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.mostrarUsuario()
  }

  mostrarUsuario() {
    this.UsuarioService.getAllUsuario()
      .subscribe({
        next: (data) => {
          this.usuarios = data.usuario
        }
      })
  }

  eliminar(id: number): void{
    this.router.navigateByUrl('/usuario');
    this.UsuarioService.deleteUsuario(id).subscribe(() => {
        this.messageService.add({severity:'warn', summary: 'Notificación', detail: 'Usuario Eliminado', life:5000});
        this.mostrarUsuario();
      },
      err => {
        console.log(err);
        console.log('No se ha eliminado correctamente');

      }
    );
  }

}
