import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, of} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  usuario: any;
  base_url = 'http://127.0.0.1:8000'
  header_login = new HttpHeaders().set('Content-Type', 'application/json')
  options_login = {headers:this.header_login}
  headers_token:any;
  options_token:any;

  constructor(private http:HttpClient,private router:Router) { }


  get_token(data:any){
    let url = this.base_url + '/token'
    let credenciales = JSON.stringify(data)
    return this.http.post(url,credenciales,this.options_login).pipe(catchError(this.handleError<any>()))

  }
  get(end_point:string){
    let url = this.base_url + '/'+end_point+'/'
    return this.http.get(url,this.options_token).pipe(catchError(this.handleError<any>()))


  }
  post(end_point:string,data:any){
    let url = this.base_url + '/'+end_point+'/'
    let datos = JSON.stringify(data)
    return this.http.post(url,datos,this.options_token).pipe(catchError(this.handleError<any>()))

  }
  update(end_point:string,data:any,id:any){
    let url = this.base_url + '/'+end_point+'/'+id+'/'
    let datos = JSON.stringify(data)
    return this.http.patch(url,datos,this.options_token).pipe(catchError(this.handleError<any>()))

  }
  add_token(token:string){
    this.headers_token=new HttpHeaders().set('Content-Type', 'application/json')
      .set('Authorization','Token '+token)
    this.options_token = {headers:this.headers_token}
  }
  LogOut(){
    this.usuario='';
    this.router.navigate(['/login']);

  }
  private handleError<T>(result?:T){
    return (error:any): Observable<T> =>{
      console.log(error.error)
      return of(result as T);
    };
  }
}
