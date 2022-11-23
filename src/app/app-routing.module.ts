import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {Component, NgModule} from "@angular/core";
import {LoginComponent} from "./login/login.component";
import {InicioComponent} from "./inicio/inicio.component";
import {AuthGuard} from "./providers/auth.guard";
import {ProveedoresComponent} from "./proveedores/proveedores.component";
import {SucursalesComponent} from "./sucursales/sucursales.component";
import {EmpleadosComponent} from "./empleados/empleados.component";
import {ProductoComponent} from "./producto/producto.component";
import {PedidoComponent} from "./pedido/pedido.component";
import {FacturaComponent} from "./factura/factura.component";
import {InventarioComponent} from "./inventario/inventario.component";
import {ClientesComponent} from "./clientes/clientes.component";
import {DetalleComponent} from "./detalle/detalle.component";
import {ProductoPedidoComponent} from "./producto-pedido/producto-pedido.component";


const routes:Routes =[

  {path:'home',component:InicioComponent,canActivate:[AuthGuard]},
  {path:'proveedores',component:ProveedoresComponent,canActivate:[AuthGuard]},
  {path:'sucursales',component:SucursalesComponent,canActivate:[AuthGuard]},
  {path:'empleados',component:EmpleadosComponent,canActivate:[AuthGuard]},
  {path:'producto',component:ProductoComponent,canActivate:[AuthGuard]},
  {path:'factura_pedido',component:PedidoComponent,canActivate:[AuthGuard]},
  {path:'producto_pedido',component:ProductoPedidoComponent,canActivate:[AuthGuard]},
  {path:'detalle_factura',component:DetalleComponent,canActivate:[AuthGuard]},
  {path:'factura',component:FacturaComponent,canActivate:[AuthGuard]},
  {path:'inventario',component:InventarioComponent,canActivate:[AuthGuard]},
  {path:'clientes',component:ClientesComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'**',redirectTo:'/login'},
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
