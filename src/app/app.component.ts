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
          this.router.navigate(['/proveedores']);
        }},
      {label:'Gestión sucursales',command:(event) => {
          this.router.navigate(['/sucursales']);
        }},
      {label:'Gestión empleados',command:(event) => {
          this.router.navigate(['/empleados']);
        }},
      {label:'Gestión productos',command:(event) => {
          this.router.navigate(['/producto']);
        }},
      {label:'Producto Pedido',command:(event) => {
          this.router.navigate(['/producto_pedido']);
        }},
      {label:'Factura pedido',command:(event) => {
          this.router.navigate(['/factura_pedido']);
        }},
      {label:'Detalle factura',command:(event) => {
          this.router.navigate(['/detalle_factura']);
        }},
      {label:'Factura',command:(event) => {
          this.router.navigate(['/factura']);
        }},
      {label:'Inventario',command:(event) => {
          this.router.navigate(['/inventario']);
        }},
      {label:'Clientes',command:(event) => {
          this.router.navigate(['/clientes']);
        }},
      {label:'Salir', command:(event) => {
          this.api.LogOut();
        }},
    ]
  }
}
