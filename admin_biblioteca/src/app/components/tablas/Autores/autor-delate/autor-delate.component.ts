import { Component, OnInit } from '@angular/core';
import {Message,MessageService} from 'primeng/api';
import { Router } from '@angular/router';
import { AutorI } from 'src/app/models/autor';
import { AutorService } from 'src/app/service/autor.service';

@Component({
  selector: 'app-autor-delate',
  templateUrl: './autor-delate.component.html',
  styleUrls: ['./autor-delate.component.css']
})
export class AutorDelateComponent implements OnInit{
  public autores:AutorI[] = []
  public msgs1: Message[]=[];
  constructor(
    private AutorService: AutorService,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.mostrarAutor()
  }

  mostrarAutor() {
    this.AutorService.getAllAutor()
      .subscribe({
        next: (data) => {
          this.autores = data.autor
        }
      })
  }

  eliminar(id: number): void{
    this.router.navigateByUrl('/autor');
    this.AutorService.deleteAutor(id).subscribe(() => {
        this.messageService.add({severity:'warn', summary: 'Notificación', detail: 'Autor Eliminado', life:5000});
        this.mostrarAutor();
      },
      err => {
        console.log(err);
        console.log('No se ha eliminado correctamente');

      }
    );
  }

}
