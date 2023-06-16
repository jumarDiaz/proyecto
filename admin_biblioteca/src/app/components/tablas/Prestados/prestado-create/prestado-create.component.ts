import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Message,MessageService} from 'primeng/api';
import { Router } from '@angular/router';

import { PrestarI } from 'src/app/models/prestar';
import { PrestarService } from 'src/app/service/prestar.service';

@Component({
  selector: 'app-prestado-create',
  templateUrl: './prestado-create.component.html',
  styleUrls: ['./prestado-create.component.css']
})
export class PrestadoCreateComponent implements OnInit{

  public form:FormGroup=this.formBuilder.group({
    fecha_dev: ['', [Validators.required]],
    fecha_pres: ['', [Validators.required]],
    usuarioId: ['', [Validators.required]],

  });

  constructor(
    private formBuilder: FormBuilder,
    private PrestarService: PrestarService,
    private messageService: MessageService,


    private router: Router,
  ) { }

  ngOnInit(): void {

  }

  onSubmit(): void {
    const formValue: PrestarI = this.form.value;
    console.log(formValue);
    this.PrestarService.createPrestar(formValue).subscribe(
      () => {
        // console.log('Se ha creado correctamente');
        setTimeout(()=>{                  
          this.messageService.add({severity:'success', summary: 'Notificación', detail: 'Usuario Creado', life:5000});

         }, 0);

        this.router.navigateByUrl('prestadoRead');

      },
      err => {

        console.log(err);
        console.log('No se ha creado correctamente');
      }
    );
  }

  cancel() {
    this.router.navigateByUrl('prestadoRead');
  }

  get fecha_dev() { return this.form.get('fecha_dev'); }
  get fecha_pres() { return this.form.get('fecha_pres'); }
  get usuarioId() { return this.form.get('usuarioId'); }


}
