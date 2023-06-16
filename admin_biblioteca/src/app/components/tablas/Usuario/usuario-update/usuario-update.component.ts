import { Component,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { UsuarioService } from 'src/app/service/usuario.service';
import { UsuarioI } from 'src/app/models/usuario';
import {Message,MessageService} from 'primeng/api';

@Component({
  selector: 'app-usuario-update',
  templateUrl: './usuario-update.component.html',
  styleUrls: ['./usuario-update.component.css']
})
export class UsuarioUpdateComponent implements OnInit{
  public id: number =0;
  public form:FormGroup=this.formBuilder.group({
    id: [''],
    nombre: ['', [Validators.required]],
    apellido: ['', [Validators.required]],
    direccion: ['', [Validators.required]],
    telefono: ['', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private UsuarioService: UsuarioService,
    private messageService: MessageService,   
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    // let idCliente = this.route.snapshot.paramMap.get("id");
    this.getUsuario(this.id);

  }



  getUsuario(id: number){
    this.UsuarioService.getOneUsuario(id)
    .subscribe({
      next: (data) => {
        this.form.setValue(data.usuario)
      }
    })
  }

  onSubmit() {
    const formValue: UsuarioI = this.form.value;
    const id: number =  this.form.value.id
    this.UsuarioService.updateUsuario(id, formValue).subscribe(
      () => {
        setTimeout(()=>{                  
          this.messageService.add({severity:'success', summary: 'Notificación', detail: 'Usuario Actualizado', life:5000});

     }, 0);
        this.router.navigateByUrl('usuarioRead');

      },
    );
  }

  cancel() {
    this.router.navigateByUrl('usuarioRead');
  }

  get nombre() { return this.form.get('nombre'); }
  get apellido() { return this.form.get('apellido'); }
  get direccion() { return this.form.get('direccion'); }
  get telefono() { return this.form.get('telefono'); }
}
