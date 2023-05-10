import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

export class Coursiers{
  //"coursier_id": number;
  "name": string;
  "adress": string;
  "recruitment_date": string;
  "Num_tel": string;
  "category_name": string;
}
export class CoursiersOrder{
  "coursier_id": number;
  "name": string;
  "adress": string;
  "recruitment_date": string;
  "Num_tel": string;
  "category_name": string;
}


@Injectable({
  providedIn: 'root'
})
export class CoursiersService {
  baseUrl: string = 'http://localhost:3000/api/'
  constructor( private http: HttpClient) { }

  getCoursierList(): Observable <any>{
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization' : `Bearer ${localStorage.getItem('token')}`
    })
    return this.http.get(this.baseUrl + 'coursiers/list',{headers:headers});
  }

  addCoursier(coursier: any): Observable <any>{
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization' : `Bearer ${localStorage.getItem('token')}`
    })
    return this.http.post(this.baseUrl + 'coursiers/', coursier, {headers:headers});
  }

  modifyCoursier(coursier_id: number, coursier: any): Observable<any>{
    return this.http.put(this.baseUrl + 'coursiers/' + coursier_id, coursier);
  }

  deleteCoursier(coursier_id: number, coursier: any): Observable<any>{
    return this.http.delete(this.baseUrl + 'coursiers/' +  coursier_id, coursier);
  }

}
