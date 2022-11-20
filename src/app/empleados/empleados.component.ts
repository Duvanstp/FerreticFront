import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ApiService} from "../providers/api.service";

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
  sucursales:any=[];
  empleados:any = []
  ver_form_empleados = false;
  empleado_form = this.fb.group({
    id: [''],
    nombre : ['', Validators.required],
    apellidos : ['',Validators.required],
    direccion : ['',Validators.required],
    telefono : ['',Validators.required],
    correo : ['',Validators.required],
    fecha_nacimiento : ['',Validators.required],
    username : ['',Validators.required],
    password : ['',Validators.required],
    sucursal_id: ['',Validators.required],

  })

  constructor(private api:ApiService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.get_empleados()
    this.get_sucursales()
  }

  get_sucursales(){
    this.api.get('sucursal')
      .subscribe(data =>{
          this.sucursales = data;
          console.log(data)
        }
      )
  }

  get_empleados(){
    this.api.get('empleado')
      .subscribe(data =>{
          this.empleados = data;
          console.log(data)
        }
      )
  }

  guardar_empleado(){
    if(this.empleado_form.value['id']){
      this.update_empleado()
    }else{
      this.add_empleado()
    }
  }

  add_empleado(){
    this.api.post('empleado', this.empleado_form.value)
      .subscribe(data => {
          this.get_empleados()
          this.empleado_form.reset()
          this.ver_form_empleados = false
          console.log(data)
        }
      )
  }
  llenar_form_empleado(data: any){
    this.empleado_form.patchValue({
      id: data.id,
      nombre:data.nombre,
      apellidos:data.apellidos,
      direccion:data.direccion,
      telefono:data.telefono,
      correo:data.correo,
      fecha_nacimiento:data.fecha_nacimiento,
      username:data.username,
      password:data.password,
      sucursal_id:data.sucursal.id,


    })
  }
  opciones = [{name:'Activo',code:true},{name:'Inactivo',code:false}]

  update_empleado(){
    this.api.update('empleado',this.empleado_form.value,this.empleado_form.value['id'])
      .subscribe(data =>{
          this.get_empleados()
          this.empleado_form.reset()
          this.ver_form_empleados = false

        }
      )
  }

}
