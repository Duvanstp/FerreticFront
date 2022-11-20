import { Component } from '@angular/core';
import {MenuItem} from "primeng/api";
import {ApiService} from "./providers/api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FerreticFront';
  items: MenuItem[] = [];

  constructor(public api:ApiService, private router:Router){
    this.items =[
      {label:'Gestión cine',command:(event) => {
          this.router.navigate(['/home']);
        }},
      {label:'Gestión Salas',command:(event) => {
          this.router.navigate(['/home']);
        }},
      {label:'Gestión Funciones'},
      {label:'Gestión Peliculas',command:(event) => {
          this.router.navigate(['/Home']);
        }},
      {label:'Salir', command:(event) => {
          this.api.LogOut();
        }},

    ]
  }
}
