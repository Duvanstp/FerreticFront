import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ApiService} from "../providers/api.service";

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {
  proveedores:any = []
  ver_form_proveedores = false;
  proveedor_form = this.fb.group({
    id: [''],
    producto : ['', Validators.required],
    direccion : ['',Validators.required],
    telefono : ['',Validators.required],
    nombre : ['',Validators.required],
    nit: ['',Validators.required],

  })

  constructor(private api:ApiService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.get_proveedores()
  }

  get_proveedores(){
    this.api.get('proveedor')
      .subscribe(data =>{
          this.proveedores = data;
        }
      )
  }

  guardar_proveedor(){
    if(this.proveedor_form.value['id']){
      this.update_proveedor()
    }else{
      this.add_proveedor()
    }
  }

  add_proveedor(){
    this.api.post('proveedor', this.proveedor_form.value)
      .subscribe(data => {
          this.get_proveedores()
          this.proveedor_form.reset()
          this.ver_form_proveedores = false
        }
      )
  }
  llenar_form_proveedor(data: any){
    this.proveedor_form.patchValue({
      id: data.id,
      producto : data.producto,
      direccion : data.direccion,
      telefono : data.telefono,
      nombre : data.nombre,
      nit:data.nit,

    })
  }
  update_proveedor(){
    this.api.update('proveedor',this.proveedor_form.value,this.proveedor_form.value['id'])
      .subscribe(data =>{
          this.get_proveedores()
          this.proveedor_form.reset()
          this.ver_form_proveedores = false
        }
      )
  }
}
