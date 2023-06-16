import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrestarI } from 'src/app/models/prestar';
import { PrestarService } from 'src/app/service/prestar.service';

@Component({
  selector: 'app-prestado-read',
  templateUrl: './prestado-read.component.html',
  styleUrls: ['./prestado-read.component.css']
})
export class PrestadoReadComponent implements OnInit{
  public prestados:PrestarI[] = [];
  // public displayedColumns: string[] = ["id", "nombre", "apellido", "direccion", "telefono"]
  constructor(
    private PrestarService: PrestarService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.mostrarPrestados()
  }

  mostrarPrestados() {
    this.PrestarService.getAllPrestar()
      .subscribe({
        next: (data) => {
          this.prestados = data.prestar
          console.log(this.prestados)
        }
      })
  }
}
