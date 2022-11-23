import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ApiService} from "../providers/api.service";

@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html',
  styleUrls: ['./sucursales.component.css']
})
export class SucursalesComponent implements OnInit {
  sucursales:any = []
  empresas:any = []
  ver_form_sucursal = false;
  sucursal_form = this.fb.group({
    id: [''],
    empresa_id:['',Validators.required],
    ciudad : ['', Validators.required],
    direccion : ['',Validators.required],
    telefono : ['',Validators.required],
    correo : ['',Validators.required],
    gerente: ['',Validators.required],

  })

  constructor(private api:ApiService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.get_sucursales()
    this.get_empresas()
  }
  get_empresas(){
    this.api.get('empresa')
      .subscribe(data =>{
          this.empresas = data;
        }
      )
  }

  get_sucursales(){
    this.api.get('sucursal')
      .subscribe(data =>{
          this.sucursales = data;
        }
      )
  }

  guardar_sucursal(){
    if(this.sucursal_form.value['id']){
      this.update_sucursal()
    }else{
      this.add_sucursal()
    }
  }

  add_sucursal(){
    this.api.post('sucursal', this.sucursal_form.value)
      .subscribe(data => {
          this.get_sucursales()
          this.sucursal_form.reset()
          this.ver_form_sucursal = false
        }
      )
  }
  llenar_form_sucursal(data: any){
    this.sucursal_form.patchValue({
      id: data.id,
      empresa_id: data.empresa.id,
      ciudad:data.ciudad,
      direccion:data.direccion,
      telefono:data.telefono,
      correo:data.correo,
      gerente:data.gerente,

    })
  }
  update_sucursal(){
    this.api.update('sucursal',this.sucursal_form.value,this.sucursal_form.value['id'])
      .subscribe(data =>{
          this.get_sucursales()
          this.sucursal_form.reset()
          this.ver_form_sucursal = false
        }
      )
  }
}
