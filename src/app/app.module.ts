import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import { LoginComponent } from './login/login.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ApiService} from "./providers/api.service";

// Primeng

import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {MessageService} from "primeng/api";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    ToastModule,
  ],
  providers: [ApiService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
