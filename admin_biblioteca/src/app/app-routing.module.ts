import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutorCreateComponent } from './components/tablas/Autores/autor-create/autor-create.component';
import { AutorUpdateComponent } from './components/tablas/Autores/autor-update/autor-update.component';
import { AutorReadComponent } from './components/tablas/Autores/autor-read/autor-read.component';
import { AutorDelateComponent } from './components/tablas/Autores/autor-delate/autor-delate.component';
import { UsuarioCreateComponent } from './components/tablas/Usuario/usuario-create/usuario-create.component';
import { UsuarioUpdateComponent } from './components/tablas/Usuario/usuario-update/usuario-update.component';
import { UsuarioReadComponent } from './components/tablas/Usuario/usuario-read/usuario-read.component';
import { UsuarioDelateComponent } from './components/tablas/Usuario/usuario-delate/usuario-delate.component';
import { LibrosCreateComponent } from './components/tablas/Libros/libros-create/libros-create.component';
import { LibrosUpdateComponent } from './components/tablas/Libros/libros-update/libros-update.component';
import { LibrosReadComponent } from './components/tablas/Libros/libros-read/libros-read.component';
import { LibrosDelateComponent } from './components/tablas/Libros/libros-delate/libros-delate.component';
import { EjempalresCreateComponent } from './components/tablas/Ejempalres/ejempalres-create/ejempalres-create.component';
import { EjempalresUpdateComponent } from './components/tablas/Ejempalres/ejempalres-update/ejempalres-update.component';
import { EjempalresReadComponent } from './components/tablas/Ejempalres/ejempalres-read/ejempalres-read.component';
import { EjempalresDelateComponent } from './components/tablas/Ejempalres/ejempalres-delate/ejempalres-delate.component';
import { PrestadoCreateComponent } from './components/tablas/Prestados/prestado-create/prestado-create.component';
import { PrestadoUpdateComponent } from './components/tablas/Prestados/prestado-update/prestado-update.component';
import { PrestadoReadComponent } from './components/tablas/Prestados/prestado-read/prestado-read.component';
import { PrestadoDelateComponent } from './components/tablas/Prestados/prestado-delate/prestado-delate.component';

const routes: Routes = [

{
  path: 'autorCreate',
  component: AutorCreateComponent
},
{
  path: 'autorRead/autorUpdate/:id',
  component: AutorUpdateComponent
},
{
  path: 'autorRead',
  component: AutorReadComponent
},
{
  path: 'autorDealte',
  component: AutorDelateComponent
},
{
  path: 'usuarioCreate',
  component: UsuarioCreateComponent
},
{
  path: "usuarioRead/edit/:id",
  component: UsuarioUpdateComponent
},
{
  path: 'usuarioRead',
  component: UsuarioReadComponent
},
{
  path: 'usuarioDealte',
  component: UsuarioDelateComponent
},
{
  path: 'libroCreate',
  component: LibrosCreateComponent
},
{
  path: 'libroUpdate',
  component: LibrosUpdateComponent
},
{
  path: 'libroRead',
  component: LibrosReadComponent
},
{
  path: 'libroDealte',
  component: LibrosDelateComponent
},{
  path: 'ejemplarCreate',
  component: EjempalresCreateComponent
},
{
  path: 'ejemplarRead/edit/:id',
  component: EjempalresUpdateComponent
},
{
  path: 'ejemplarRead',
  component: EjempalresReadComponent
},
{
  path: 'ejemplarDealte',
  component: EjempalresDelateComponent
},
{
  path: 'prestadoCreate',
  component: PrestadoCreateComponent
},
{
  path: 'prestadoRead/edit/:id',
  component: PrestadoUpdateComponent
},
{
  path: 'prestadoRead',
  component: PrestadoReadComponent
},
{
  path: 'prestadoDealte',
  component: PrestadoDelateComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
