import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {Component, NgModule} from "@angular/core";
import {LoginComponent} from "./login/login.component";
import {InicioComponent} from "./inicio/inicio.component";

const routes:Routes =[

  {path:'home',component:InicioComponent},
  {path:'login',component:LoginComponent},
  {path:'**',redirectTo:'/login'},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
