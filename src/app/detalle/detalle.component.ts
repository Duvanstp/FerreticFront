import { Component, OnInit } from '@angular/core';
import {ApiService} from "../providers/api.service";

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  detalles:any =[]

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.get_detalles()
  }

  get_detalles(){
    this.api.get('detallefactura')
      .subscribe(
        data=>{
          this.detalles = data
          console.log(data)
        }
      )
  }
}
