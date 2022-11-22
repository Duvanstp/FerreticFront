import { Component, OnInit } from '@angular/core';
import {ApiService} from "../providers/api.service";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {
  ver_form_factura=false
  facturas:any = []
  factura_form = this.fb.group({
    id:[''],
    fecha_venta:[''],
    cliente_id:[''],
    empleado_id:[''],
  })

  constructor(private api:ApiService, private fb: FormBuilder) {


  }

  ngOnInit(): void {
    this.get_facturas()
    this.add_facturas()
  }

get_facturas(){
    this.api.get('factura')
      .subscribe(
        data=>{
          this.facturas = data
          console.log(data)
        }
      )

}
add_facturas(){
    this.api.post('factura',this.factura_form.value).subscribe(
      data=>{
        this.get_facturas()
        this.factura_form.reset()
        this.ver_form_factura=false
        console.log(data)
      }
  )

  }

}
