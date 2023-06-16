import { Component,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {Message,MessageService} from 'primeng/api';

import { EjemplarI } from 'src/app/models/ejemplar';
import { EjemplarService } from 'src/app/service/ejemplar.service';
@Component({
  selector: 'app-ejempalres-update',
  templateUrl: './ejempalres-update.component.html',
  styleUrls: ['./ejempalres-update.component.css']
})
export class EjempalresUpdateComponent implements OnInit{
  public id: number =0;
  public form:FormGroup=this.formBuilder.group({
    id: [''],
    localizacion: ['', [Validators.required]],
    libroId: ['', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private EjemplarService: EjemplarService,
    private messageService: MessageService,   
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    // let idCliente = this.route.snapshot.paramMap.get("id");
    this.getEjemplar(this.id);

  }



  getEjemplar(id: number){
    this.EjemplarService.getOneEjemplar(id)
    .subscribe({
      next: (data) => {
        this.form.setValue(data.ejemplar)
      }
    })
  }

  onSubmit() {
    const formValue: EjemplarI = this.form.value;
    const id: number =  this.id
    console.log(id)
    this.EjemplarService.updateEjemplar(id, formValue).subscribe(
      () => {
        setTimeout(()=>{                  
          this.messageService.add({severity:'success', summary: 'Notificación', detail: 'Usuario Actualizado', life:5000});

     }, 0);
        this.router.navigateByUrl('ejemplarRead');

      },
    );
  }

  cancel() {
    this.router.navigateByUrl('ejemplarRead');
  }

  get localizacion() { return this.form.get('localizacion'); }
  get libroId() { return this.form.get('libroId'); }

}
