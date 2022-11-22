import { Component, OnInit } from '@angular/core';
import {ApiService} from "../providers/api.service";
import {FormBuilder, Validator, Validators} from "@angular/forms";

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
    fecha_venta:['', Validators.required],
    cliente_id:['',Validators.required],
    empleado_id:['',Validators.required],
  })

  constructor(private api:ApiService, private fb: FormBuilder) {


  }

  ngOnInit(): void {
    this.get_facturas()
    this.factura_form.reset()
  }

get_facturas(){
    this.api.get('factura')
      .subscribe(
        data=>{
          this.facturas = data

        }
      )

}

  guardar_factura(){
    if(this.factura_form.value['id']){
      this.update_facturas()
    }else{
      this.add_facturas()
    }
  }

add_facturas(){
    this.api.post('factura',this.factura_form.value).subscribe(
      data=>{
        this.get_facturas()
        this.factura_form.reset()
        this.ver_form_factura=false

      }
  )

  }

  llenar_form_factura(data:any){
    this.factura_form.patchValue({
      id:data.id,
      fecha_venta:data.fecha_venta,
      cliente_id:data.cliente.nombre,
      empleado_id:data.empleado.first_name
      }

    )

  }
  update_facturas(){
    this.api.update('factura',this.factura_form.value, this.factura_form.value['id']).subscribe(
      data=>{
        this.get_facturas()
        this.factura_form.reset()
        this.ver_form_factura=false

      }
    )

  }


}
