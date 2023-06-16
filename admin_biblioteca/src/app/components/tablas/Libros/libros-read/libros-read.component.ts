import { Component,OnInit } from '@angular/core';
import { LibroI } from 'src/app/models/libro';
import { LibroService } from 'src/app/service/libro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-libros-read',
  templateUrl: './libros-read.component.html',
  styleUrls: ['./libros-read.component.css']
})
export class LibrosReadComponent implements OnInit{
  public libros:LibroI[] = [];
  // public displayedColumns: string[] = ["id", "nombre", "apellido", "direccion", "telefono"]
  constructor(
    private LibroService: LibroService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.mostrarLibros()
  }

  mostrarLibros() {
    this.LibroService.getAllLibro()
      .subscribe({
        next: (data) => {
          this.libros = data.libro
          console.log(data)
          // console.log(this.libros)
        }
      })
  }
}
