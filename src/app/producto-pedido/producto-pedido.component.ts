import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ApiService} from "../providers/api.service";

@Component({
  selector: 'app-producto-pedido',
  templateUrl: './producto-pedido.component.html',
  styleUrls: ['./producto-pedido.component.css']
})

export class ProductoPedidoComponent implements OnInit {

  producto_pedidos:any = []
  ver_form_producto_pedidos = false;
  producto_pedido_form = this.fb.group({
    id: [''],
    nombre : ['', Validators.required],
    fabricante : ['',Validators.required],
    descripcion : ['',Validators.required],
    peso : ['',Validators.required],
    tipo : ['',Validators.required],
  })

  constructor(private api:ApiService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.get_productoPedido()
  }

  get_productoPedido(){
    this.api.get('productopedido')
      .subscribe(data => {this.producto_pedidos = data;
        console.log(data)
      })
  }

  guardar_producto_pedido(){
    if(this.producto_pedido_form.value['id']){
      this.update_producto_pedido()
    }else {
      this.add_producto_pedido()
    }
  }

  add_producto_pedido(){
    this.api.post('productopedido',this.producto_pedido_form.value)
      .subscribe(data =>  {
        this.get_productoPedido()
        this.producto_pedido_form.reset()
        this.ver_form_producto_pedidos = false
        console.log(data)
      } )
  }

  llenar_form_producto_pedido(data: any){
    this.producto_pedido_form.patchValue({
      id: data.id,
      nombre: data.nombre,
      fabricante: data.fabricante,
      descripcion: data.descripcion,
      peso: data.peso,
      tipo: data.tipo
    })
  }

  update_producto_pedido(){
    this.api.update('productopedido',this.producto_pedido_form.value, this.producto_pedido_form.value['id'])
      .subscribe(data => {
        this.get_productoPedido()
        this.producto_pedido_form.reset()
        this.ver_form_producto_pedidos = false
      })
  }

}
