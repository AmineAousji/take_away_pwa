import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

export class Category{
  "category_name" : string;
  "description" : string;
}

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  baseUrl: string = 'http://localhost:3000/api/'
  constructor( private http: HttpClient) { }

  getCategoryList(): Observable <any>{
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization' : `Bearer ${localStorage.getItem('token')}`
    })
    return this.http.get(this.baseUrl + 'categories/list',{headers:headers});
  }

  getCategory(categoryName: number): Observable <any>{
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization' : `Bearer ${localStorage.getItem('token')}`
    })    
    return this.http.get(this.baseUrl + 'categories/' + categoryName, {headers:headers});
  }
  getCoursierByCategory(categoryName: number): Observable <any>{
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization' : `Bearer ${localStorage.getItem('token')}`
    })
    return this.http.get(this.baseUrl + 'categories/' + categoryName + '/coursiers', {headers:headers});
  }

  addCategory(category: any): Observable <any>{
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization' : `Bearer ${localStorage.getItem('token')}`
    })
    return this.http.post(this.baseUrl + 'categories/', category, {headers:headers});
  }
  
  modifyCategory(category_name:string, category: any): Observable <any>{
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization' : `Bearer ${localStorage.getItem('token')}`
    })
    return this.http.put(this.baseUrl + 'categories/' + category_name, category, {headers:headers});
  }

}
