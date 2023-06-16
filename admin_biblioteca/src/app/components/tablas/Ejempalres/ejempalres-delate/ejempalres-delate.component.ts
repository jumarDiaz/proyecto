import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Message,MessageService} from 'primeng/api';

import { EjemplarI } from 'src/app/models/ejemplar';
import { EjemplarService } from 'src/app/service/ejemplar.service';
@Component({
  selector: 'app-ejempalres-delate',
  templateUrl: './ejempalres-delate.component.html',
  styleUrls: ['./ejempalres-delate.component.css']
})
export class EjempalresDelateComponent implements OnInit{
  public ejemplares:EjemplarI[] = []
  public msgs1: Message[]=[];
  constructor(
    private EjemplarService: EjemplarService,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.mostrarEjemplar()
  }

  mostrarEjemplar() {
    this.EjemplarService.getAllEjemplar()
      .subscribe({
        next: (data) => {
          this.ejemplares = data.ejemplar
        }
      })
  }

  eliminar(id: number): void{
    this.router.navigateByUrl('/usuario');
    this.EjemplarService.deleteCliente(id).subscribe(() => {
        this.messageService.add({severity:'warn', summary: 'Notificación', detail: 'Usuario Eliminado', life:5000});
        this.mostrarEjemplar();
      },
      err => {
        console.log(err);
        console.log('No se ha eliminado correctamente');

      }
    );
  }

}
