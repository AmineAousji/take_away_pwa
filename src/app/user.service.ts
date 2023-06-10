import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, ɵɵresolveBody } from '@angular/core';
import { Observable } from 'rxjs';

export class User {
  'id_user' : number;
  'login' : string;
  'password' : string;
}

export class UserLogin{
  'login': string;
  'password': string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = 'http://localhost:3000/api/'

  constructor(private http: HttpClient) {}

  login(user : User) : Observable <any> {
    return this.http.post(this.baseUrl + 'login', user)
  }

  check(user : UserLogin) : Observable <any> {
    console.log(user)
    return this.http.post(this.baseUrl + 'check/', user)
  }

  addUser(user: any): Observable <any>{
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization' : `Bearer ${localStorage.getItem('token')}`
    })

    return this.http.post(this.baseUrl + 'users/', user, {headers:headers});
  }

}
