import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';
import {ApiService} from "./providers/api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   items: MenuItem[] = [] ;

  constructor(public api:ApiService, private router:Router){
    this.items =[
      {label:'Gestión proveedores',command:(event) => {
          this.router.navigate(['/home']);
        }},
      {label:'Gestión sucursales',command:(event) => {
          this.router.navigate(['/home']);
        }},
      {label:'Gestión empleados'},
      {label:'Gestión productos',command:(event) => {
          this.router.navigate(['/home']);
        }},
      {label:'Gestión ventas',command:(event) => {
          this.router.navigate(['/home']);
        }},
      {label:'Factura pedido',command:(event) => {
          this.router.navigate(['/home']);
        }},
      {label:' Detalle factura',command:(event) => {
          this.router.navigate(['/home']);
        }},
      {label:'Inventario',command:(event) => {
          this.router.navigate(['/home']);
        }},
      {label:'Clientes',command:(event) => {
          this.router.navigate(['/home']);
        }},
      {label:'Salir', command:(event) => {
          this.api.LogOut();
        }},

    ]
  }
}
