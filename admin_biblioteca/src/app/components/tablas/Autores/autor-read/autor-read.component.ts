import { Component,OnInit } from '@angular/core';
import { AutorI } from 'src/app/models/autor';
import { AutorService } from 'src/app/service/autor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-autor-read',
  templateUrl: './autor-read.component.html',
  styleUrls: ['./autor-read.component.css']
})
export class AutorReadComponent implements OnInit{
  public autores:AutorI[] = [];
  // public displayedColumns: string[] = ["id", "nombre", "apellido", "direccion", "telefono"]
  constructor(
    private AutorService: AutorService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.mostrarAutores()
  }

  mostrarAutores() {
    this.AutorService.getAllAutor()
      .subscribe({
        next: (data) => {
          this.autores = data.autor
        }
      })
  }
}
