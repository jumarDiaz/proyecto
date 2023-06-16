import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Message,MessageService} from 'primeng/api';
import { Router } from '@angular/router';

import { EjemplarI } from 'src/app/models/ejemplar';
import { EjemplarService } from 'src/app/service/ejemplar.service';
@Component({
  selector: 'app-ejempalres-create',
  templateUrl: './ejempalres-create.component.html',
  styleUrls: ['./ejempalres-create.component.css']
})
export class EjempalresCreateComponent implements OnInit{

  public form:FormGroup=this.formBuilder.group({
    localizacion: ['', [Validators.required]],
    libroId: ['', [Validators.required]],

  });

  constructor(
    private formBuilder: FormBuilder,
    private EjemplarService: EjemplarService,
    private messageService: MessageService,


    private router: Router,
  ) { }

  ngOnInit(): void {

  }

  onSubmit(): void {
    const formValue: EjemplarI = this.form.value;
    console.log(formValue);
    this.EjemplarService.createEjempalr(formValue).subscribe(
      () => {
        // console.log('Se ha creado correctamente');
        setTimeout(()=>{                  
          this.messageService.add({severity:'success', summary: 'Notificación', detail: 'Usuario Creado', life:5000});

         }, 0);

        this.router.navigateByUrl('ejemplarRead');

      },
      err => {

        console.log(err);
        console.log('No se ha creado correctamente');
      }
    );
  }

  cancel() {
    this.router.navigateByUrl('ejemplarRead');
  }

  get localizacion() { return this.form.get('localizacion'); }
  get libroId() { return this.form.get('libroId'); }

}
