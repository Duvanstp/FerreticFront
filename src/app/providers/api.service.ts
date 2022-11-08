import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  base_url = 'http://127.0.0.1:8000'
  header_login = new HttpHeaders().set('Content-Type', 'application/json')
  options_login = {headers:this.header_login}

  constructor(private http:HttpClient) { }

  get_token(data:any){
    let url = this.base_url + '/token'
    let credenciales = JSON.stringify(data)
    return this.http.post(url,credenciales,this.options_login).pipe(catchError(this.handleError<any>()))

  }
  private handleError<T>(result?:T){
    return (error:any): Observable<T> =>{
      console.log(error.error)
      return of(result as T);
    };
  }

}
