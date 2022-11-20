import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ApiService} from "../providers/api.service";

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  clientes:any = []
  ver_form_cliente = false;
  cliente_form = this.fb.group({
    id: [''],
    nombre : ['', Validators.required],
    apellidos : ['',Validators.required],
    direccion : ['',Validators.required],
    telefono : ['',Validators.required],
    correo : ['',Validators.required],

  })

  constructor(private api:ApiService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.get_clientes()
  }

  get_clientes(){
    this.api.get('cliente')
      .subscribe(data =>{
          this.clientes = data;
          console.log(data)
        }
      )
  }

  guardar_cliente(){
    if(this.cliente_form.value['id']){
      this.update_cliente()
    }else{
      this.add_cliente()
    }
  }

  add_cliente(){
    this.api.post('cliente', this.cliente_form.value)
      .subscribe(data => {
          this.get_clientes()
          this.cliente_form.reset()
          this.ver_form_cliente = false
          console.log(data)
        }
      )
  }
  llenar_form_clientes(data: any){
    this.cliente_form.patchValue({
      id: data.id,
      nombre:data.nombre,
      apellidos:data.apellidos,
      direccion:data.direccion,
      telefono:data.telefono,
      correo:data.correo,

    })
  }
  opciones = [{name:'Activo',code:true},{name:'Inactivo',code:false}]

  update_cliente(){
    this.api.update('cliente',this.cliente_form.value,this.cliente_form.value['id'])
      .subscribe(data =>{
          this.get_clientes()
          this.cliente_form.reset()
          this.ver_form_cliente = false

        }
      )
  }

}
