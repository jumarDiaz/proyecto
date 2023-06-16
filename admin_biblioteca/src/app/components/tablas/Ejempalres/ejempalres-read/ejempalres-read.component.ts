import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EjemplarI } from 'src/app/models/ejemplar';
import { EjemplarService } from 'src/app/service/ejemplar.service';

@Component({
  selector: 'app-ejempalres-read',
  templateUrl: './ejempalres-read.component.html',
  styleUrls: ['./ejempalres-read.component.css']
})
export class EjempalresReadComponent implements OnInit{
  public ejemplares:EjemplarI[] = [];
  // public displayedColumns: string[] = ["id", "nombre", "apellido", "direccion", "telefono"]
  constructor(
    private EjemplarService: EjemplarService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.mostrarEjemplares()
  }

  mostrarEjemplares() {
    this.EjemplarService.getAllEjemplar()
      .subscribe({
        next: (data) => {
          this.ejemplares = data.ejemplar
          console.log(this.ejemplares)
        }
      })
  }

}
