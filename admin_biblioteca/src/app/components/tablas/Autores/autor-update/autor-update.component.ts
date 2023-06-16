import { Component, OnInit } from '@angular/core';
import {Message,MessageService} from 'primeng/api';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { AutorI } from 'src/app/models/autor';
import { AutorService } from 'src/app/service/autor.service';

@Component({
  selector: 'app-autor-update',
  templateUrl: './autor-update.component.html',
  styleUrls: ['./autor-update.component.css']
})
export class AutorUpdateComponent implements OnInit{
  public id: number =0;
  public form:FormGroup=this.formBuilder.group({
    id: [''],
    nombre: ['', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private AutorService: AutorService,
    private messageService: MessageService,   
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getAutor(this.id);

  }



  getAutor(id: number){
    this.AutorService.getOneAutor(id)
    .subscribe({
      next: (data) => {
        this.form.setValue(data.autor)
      }
    })
  }

  onSubmit() {
    
    const formValue: AutorI = this.form.value;
    const id = this.id
    this.AutorService.updateAutor(id, formValue).subscribe(
      () => {
        setTimeout(()=>{                  
          this.messageService.add({severity:'success', summary: 'Notificación', detail: 'Autor Actualizado', life:5000});

     }, 0);
        this.router.navigateByUrl('autorRead');

      },
    );
  }

  cancel() {
    this.router.navigateByUrl('autorRead');
  }

  get nombre() { return this.form.get('nombre'); }

}
