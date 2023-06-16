import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Message,MessageService} from 'primeng/api';

import { PrestarI } from 'src/app/models/prestar';
import { PrestarService } from 'src/app/service/prestar.service';
@Component({
  selector: 'app-prestado-delate',
  templateUrl: './prestado-delate.component.html',
  styleUrls: ['./prestado-delate.component.css']
})
export class PrestadoDelateComponent implements OnInit{
  public prestado:PrestarI[] = []
  public msgs1: Message[]=[];
  constructor(
    private PrestarService: PrestarService,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.mostrarPrestar()
  }

  mostrarPrestar() {
    this.PrestarService.getAllPrestar()
      .subscribe({
        next: (data) => {
          this.prestado = data.prestar
        }
      })
  }

  eliminar(id: number): void{
    this.router.navigateByUrl('/usuario');
    this.PrestarService.deletePrestar(id).subscribe(() => {
        this.messageService.add({severity:'warn', summary: 'Notificación', detail: 'Usuario Eliminado', life:5000});
        this.mostrarPrestar();
      },
      err => {
        console.log(err);
        console.log('No se ha eliminado correctamente');

      }
    );
  }

}
