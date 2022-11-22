import { Component, OnInit } from '@angular/core';
import {ApiService} from "../providers/api.service";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  detalles:any =[]
  ver_form_detalle=false
  detalles_form = this.fb.group({
    id:[''],
    cantidad:['', Validators.required],
    valor_total:['',Validators.required],
    factura_id:['',Validators.required],
    producto_id:['',Validators.required],
  })

  constructor(private api:ApiService,private fb: FormBuilder) {

}

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

  guardar_detalle(){
    if(this.detalles_form.value['id']){
      this.update_detalles()
    }else{
      this.add_detalles()
    }
  }

  add_detalles(){
    this.api.post('detalle',this.detalles_form.value).subscribe(
      data=>{
        this.get_detalles()
        this.detalles_form.reset()
        this.ver_form_detalle=false
        console.log(data)
      }
    )

  }

  llenar_form_detalles(data:any){
    this.detalles_form.patchValue({
        id:data.id,
        cantidad:data.cantidad,
        valor_total:data.valor_total,
        factura_id:data.factura.id,
        producto_id:data.producto.id
      }

    )

  }
  update_detalles(){
    this.api.update('detalle',this.detalles_form.value, this.detalles_form.value['id']).subscribe(
      data=>{
        this.get_detalles()
        this.detalles_form.reset()
        this.ver_form_detalle=false
        console.log(data)
      }
    )
  }
}
