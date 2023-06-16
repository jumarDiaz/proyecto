import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {Message,MessageService} from 'primeng/api';

import { AutorI } from 'src/app/models/autor';
import { AutorService } from 'src/app/service/autor.service';
@Component({
  selector: 'app-autor-create',
  templateUrl: './autor-create.component.html',
  styleUrls: ['./autor-create.component.css']
})
export class AutorCreateComponent implements OnInit{


  public form:FormGroup=this.formBuilder.group({
    nombre: ['', [Validators.required]],

  });

  constructor(
    private formBuilder: FormBuilder,
    private AutorService: AutorService,
    private messageService: MessageService,


    private router: Router,
  ) { }

  ngOnInit(): void {

  }

  onSubmit(): void {
    const formValue: AutorI = this.form.value;
    console.log(formValue);
    this.AutorService.createAutor(formValue).subscribe(
      () => {
        console.log('Se ha creado correctamente');
        setTimeout(()=>{                  
          this.messageService.add({severity:'success', summary: 'Notificación', detail: 'Autor Creado', life:5000});

         }, 0);

        this.router.navigateByUrl('autorRead');

      },
      err => {

        console.log(err);
        console.log('No se ha creado correctamente');
      }
    );
  }

  cancel() {
    this.router.navigateByUrl('/autorRead');
  }

  get nombre() { return this.form.get('nombre'); }
}
