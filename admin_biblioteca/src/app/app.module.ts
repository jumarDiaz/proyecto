import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AsideComponent } from './components/layout/aside/aside.component';
import { ContentComponent } from './components/layout/content/content.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PanelMenuModule } from 'primeng/panelmenu';
import { UsuarioCreateComponent } from './components/tablas/Usuario/usuario-create/usuario-create.component';
import { UsuarioReadComponent } from './components/tablas/Usuario/usuario-read/usuario-read.component';
import { UsuarioUpdateComponent } from './components/tablas/Usuario/usuario-update/usuario-update.component';
import { UsuarioDelateComponent } from './components/tablas/Usuario/usuario-delate/usuario-delate.component';
import { LibrosCreateComponent } from './components/tablas/Libros/libros-create/libros-create.component';
import { LibrosUpdateComponent } from './components/tablas/Libros/libros-update/libros-update.component';
import { LibrosReadComponent } from './components/tablas/Libros/libros-read/libros-read.component';
import { LibrosDelateComponent } from './components/tablas/Libros/libros-delate/libros-delate.component';
import { PrestadoCreateComponent } from './components/tablas/Prestados/prestado-create/prestado-create.component';
import { PrestadoUpdateComponent } from './components/tablas/Prestados/prestado-update/prestado-update.component';
import { PrestadoReadComponent } from './components/tablas/Prestados/prestado-read/prestado-read.component';
import { PrestadoDelateComponent } from './components/tablas/Prestados/prestado-delate/prestado-delate.component';
import { EjempalresCreateComponent } from './components/tablas/Ejempalres/ejempalres-create/ejempalres-create.component';
import { EjempalresUpdateComponent } from './components/tablas/Ejempalres/ejempalres-update/ejempalres-update.component';
import { EjempalresReadComponent } from './components/tablas/Ejempalres/ejempalres-read/ejempalres-read.component';
import { EjempalresDelateComponent } from './components/tablas/Ejempalres/ejempalres-delate/ejempalres-delate.component';
import { AutorCreateComponent } from './components/tablas/Autores/autor-create/autor-create.component';
import { AutorUpdateComponent } from './components/tablas/Autores/autor-update/autor-update.component';
import { AutorReadComponent } from './components/tablas/Autores/autor-read/autor-read.component';
import { AutorDelateComponent } from './components/tablas/Autores/autor-delate/autor-delate.component';
import {InputTextModule} from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideComponent,
    ContentComponent,
    FooterComponent,
    UsuarioCreateComponent,
    UsuarioReadComponent,
    UsuarioUpdateComponent,
    UsuarioDelateComponent,
    LibrosCreateComponent,
    LibrosUpdateComponent,
    LibrosReadComponent,
    LibrosDelateComponent,
    PrestadoCreateComponent,
    PrestadoUpdateComponent,
    PrestadoReadComponent,
    PrestadoDelateComponent,
    EjempalresCreateComponent,
    EjempalresUpdateComponent,
    EjempalresReadComponent,
    EjempalresDelateComponent,
    AutorCreateComponent,
    AutorUpdateComponent,
    AutorReadComponent,
    AutorDelateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PanelMenuModule,
    FormsModule,
    HttpClientModule,
    TableModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule,
    ToastModule
  ],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
