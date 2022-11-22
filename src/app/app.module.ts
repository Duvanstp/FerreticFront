import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {ApiService} from "./providers/api.service";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from "primeng/button";
import {TooltipModule} from 'primeng/tooltip';
import {SelectButtonModule} from 'primeng/selectbutton';
import {DropdownModule} from 'primeng/dropdown';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
// Primeng

import {InputTextModule} from 'primeng/inputtext';
import { InicioComponent } from './inicio/inicio.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { SucursalesComponent } from './sucursales/sucursales.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { PedidoComponent } from './pedido/pedido.component';
import { ProductoComponent } from './producto/producto.component';
import { FacturaComponent } from './factura/factura.component';
import { InventarioComponent } from './inventario/inventario.component';
import { ClientesComponent } from './clientes/clientes.component';
import {AuthGuard} from "./providers/auth.guard";
import {PasswordModule} from 'primeng/password';
import { DetalleComponent } from './detalle/detalle.component';
import {StyleClassModule} from 'primeng/styleclass';
import {ImageModule} from 'primeng/image';
import {CardModule} from 'primeng/card';

// @ts-ignore
// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    EmpleadosComponent,
    SucursalesComponent,
    ProveedoresComponent,
    PedidoComponent,
    ProductoComponent,
    FacturaComponent,
    InventarioComponent,
    ClientesComponent,
    DetalleComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastModule,
    MenubarModule,
    TableModule,
    DialogModule,
    ButtonModule,
    TooltipModule,
    SelectButtonModule,
    DropdownModule,
    OverlayPanelModule,
    InputTextModule,
    PasswordModule,
    StyleClassModule,
    ImageModule,
    CardModule
  ],
  providers: [ApiService, MessageService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
