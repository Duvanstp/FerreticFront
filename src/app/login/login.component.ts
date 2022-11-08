import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ApiService} from "../providers/api.service";
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
  constructor(private fb:FormBuilder, private api:ApiService) { }

  ngOnInit(): void {
  }
  login() {
    this.api.get_token(this.login_form.value)
      .subscribe(
        data => {
          console.log(data)
        }
      )
  }
}
