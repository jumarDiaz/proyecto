import { Component,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {Message,MessageService} from 'primeng/api';

import { PrestarI } from 'src/app/models/prestar';
import { PrestarService } from 'src/app/service/prestar.service';
@Component({
  selector: 'app-prestado-update',
  templateUrl: './prestado-update.component.html',
  styleUrls: ['./prestado-update.component.css']
})
export class PrestadoUpdateComponent implements OnInit{
  public id: number =0;
  public form:FormGroup=this.formBuilder.group({
    id: [''],
    fecha_dev: ['', [Validators.required]],
    fecha_pres: ['', [Validators.required]],
    usuarioId: ['', [Validators.required]],

  });

  constructor(
    private formBuilder: FormBuilder,
    private PrestarService: PrestarService,
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
    this.PrestarService.getOnePrestar(id)
    .subscribe({
      next: (data) => {
        this.form.setValue(data.prestar)
      }
    })
  }

  onSubmit() {
    const formValue: PrestarI = this.form.value;
    const id: number =  this.id
    console.log(id)
    this.PrestarService.updatePrestar(id, formValue).subscribe(
      () => {
        setTimeout(()=>{                  
          this.messageService.add({severity:'success', summary: 'Notificación', detail: 'Usuario Actualizado', life:5000});

     }, 0);
        this.router.navigateByUrl('prestadoRead');

      },
    );
  }

  cancel() {
    this.router.navigateByUrl('prestadoRead');
  }

  get fecha_dev() { return this.form.get('fecha_dev'); }
  get fecha_pres() { return this.form.get('fecha_pres'); }
  get usuarioId() { return this.form.get('usuarioId'); }

}
