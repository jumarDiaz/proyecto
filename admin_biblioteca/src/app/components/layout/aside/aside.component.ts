import { Component,OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  items: MenuItem[]=[];

  ngOnInit(): void {
  this.items = [
    {
        label: 'Clientes',
        icon: 'pi pi-fw pi-user',
        items: [
            {
                label: 'Mostrar',
                icon: 'pi pi-fw pi-external-link',
                routerLink:'usuarioRead'
            },
            {
                label: 'Crear',
                icon: 'pi pi-fw pi-plus',
                routerLink:'usuarioCreate'
            },
            {
                label: 'Eliminar',
                icon: 'pi pi-fw pi-trash',
                routerLink:'usuarioDealte'
            },
        ]
    },
    {
        label: 'Autor',
        icon: 'pi pi-fw pi-user',
        items: [
            {
                label: 'Mostrar',
                icon: 'pi pi-fw pi-external-link',
                routerLink:'autorRead'
            },
            {
                label: 'Crear',
                icon: 'pi pi-fw pi-plus',
                routerLink:'autorCreate'
            },
            {
                label: 'Eliminar',
                icon: 'pi pi-fw pi-trash',
                routerLink:'autorDealte'
            },
        ]
    },
    {
        label: 'Libros',
        icon: 'pi pi-fw pi-book',
        items: [
            {
                label: 'Mostrar',
                icon: 'pi pi-fw pi-external-link',
                routerLink:'libroRead'
            },
            {
                label: 'Crear',
                icon: 'pi pi-fw pi-plus',
                routerLink:'libroCreate'
            },
            {
                label: 'Eliminar',
                icon: 'pi pi-fw pi-trash',
                routerLink:'libroDealte'
            },
        ]
    },
    {
        label: 'Ejemplares',
        icon: 'pi pi-fw pi-book',
        items: [
            {
                label: 'Mostrar',
                icon: 'pi pi-fw pi-external-link',
                routerLink:'ejemplarRead'
            },
            {
                label: 'Crear',
                icon: 'pi pi-fw pi-plus',
                routerLink:'ejemplarCreate'
            },
            {
                label: 'Eliminar',
                icon: 'pi pi-fw pi-trash',
                routerLink:'ejemplarDealte'
            },
        ]
    },
    {
        label: 'Prestados',
        icon: 'pi pi-fw pi-map',
        items: [
            {
                label: 'Mostrar',
                icon: 'pi pi-fw pi-external-link',
                routerLink:'prestadoRead'
            },
            {
                label: 'Crear',
                icon: 'pi pi-fw pi-plus',
                routerLink:'prestadoCreate'
            },
            {
                label: 'Eliminar',
                icon: 'pi pi-fw pi-trash',
                routerLink:'prestadoDealte'
            },
        ]
    },
];
}
}
