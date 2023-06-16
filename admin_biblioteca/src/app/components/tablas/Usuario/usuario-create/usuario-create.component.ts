import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioI } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';
import {Message,MessageService} from 'primeng/api';

@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrls: ['./usuario-create.component.css']
})
export class UsuarioCreateComponent implements OnInit{

  public form:FormGroup=this.formBuilder.group({
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
  ) { }

  ngOnInit(): void {

  }

  onSubmit(): void {
    const formValue: UsuarioI = this.form.value;
    console.log(formValue);
    this.UsuarioService.createUsuario(formValue).subscribe(
      () => {
        // console.log('Se ha creado correctamente');
        setTimeout(()=>{                  
          this.messageService.add({severity:'success', summary: 'Notificación', detail: 'Usuario Creado', life:5000});

         }, 0);

        this.router.navigateByUrl('usuarioRead');

      },
      err => {

        console.log(err);
        console.log('No se ha creado correctamente');
      }
    );
  }

  cancel() {
    this.router.navigateByUrl('/usuarios');
  }

  get nombre() { return this.form.get('nombre'); }
  get direccion() { return this.form.get('direccion'); }
  get telefono() { return this.form.get('telefono'); }
  get apellido() { return this.form.get('apellido'); }

}
