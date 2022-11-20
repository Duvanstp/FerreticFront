import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {Component, NgModule} from "@angular/core";
import {LoginComponent} from "./login/login.component";
import {InicioComponent} from "./inicio/inicio.component";
import {AuthGuard} from "./providers/auth.guard";

const routes:Routes =[

  {path:'home',component:InicioComponent,canActivate:[AuthGuard]},
  {path:'Gestión proveedores',component:InicioComponent,canActivate:[AuthGuard]},
  {path:'Gestión sucursales',component:InicioComponent,canActivate:[AuthGuard]},
  {path:'Gestión empleados',component:InicioComponent,canActivate:[AuthGuard]},
  {path:'Gestión producto',component:InicioComponent,canActivate:[AuthGuard]},
  {path:'Gestión ventas',component:InicioComponent,canActivate:[AuthGuard]},
  {path:'Factura pedido',component:InicioComponent,canActivate:[AuthGuard]},
  {path:'Detalle factura',component:InicioComponent,canActivate:[AuthGuard]},
  {path:'Inventario',component:InicioComponent,canActivate:[AuthGuard]},
  {path:'Clientes',component:InicioComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'**',redirectTo:'/login'},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
