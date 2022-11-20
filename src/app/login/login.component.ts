import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ApiService} from "../providers/api.service";
import {MessageService} from "primeng/api";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login_form = this.fb.group({
    username:[''],
    password:['']
  })
  constructor(private fb:FormBuilder, private api:ApiService,private messageService: MessageService) { }

  ngOnInit(): void {
  }
  login() {
    this.api.get_token(this.login_form.value)
      .subscribe(
        data => {
          if (data!=undefined){
            this.messageService.add({severity:'success', summary: 'Login', detail: 'Usuario logueado correctamente.'});
          }else{
            this.messageService.add({severity:'error', summary: 'Login', detail: 'Usuario o contraseña incorrectos.'});
          }
        }
      )
  }
}
