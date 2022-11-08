import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {NgModule} from "@angular/core";
import {LoginComponent} from "./login/login.component";

const routes:Routes =[

  {path:'home',component:AppComponent},
  {path:'login',component:LoginComponent},
  {path:'**',redirectTo:'/login'},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
