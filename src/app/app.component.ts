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
          this.router.navigate(['/proveedor']);
        }},
      {label:'Gestión sucursales',command:(event) => {
          this.router.navigate(['/sucursal']);
        }},
      {label:'Gestión empleados',command:(event) => {
          this.router.navigate(['/empleado']);
        }},
      {label:'Gestión productos',command:(event) => {
          this.router.navigate(['/producto']);
        }},

      {label:'Factura pedido',command:(event) => {
          this.router.navigate(['/pedido']);
        }},
      {label:'Detalle factura',command:(event) => {
          this.router.navigate(['/detallefactura']);
        }},
      {label:'Inventario',command:(event) => {
          this.router.navigate(['/inventario']);
        }},
      {label:'Clientes',command:(event) => {
          this.router.navigate(['/cliente']);
        }},
      {label:'Salir', command:(event) => {
          this.api.LogOut();
        }},

    ]
  }
}
