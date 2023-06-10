import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

export class Orders{
  "name_customer": string;
  "name_restaurant": string;
  "adress_customer": string;
  "adress_restaurant": string;
  "price": string;
  "distance": string;
  "coursier_id": string;
}

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  baseUrl: string = 'http://localhost:3000/api/'
  constructor( private http: HttpClient) { }

  getOrderList(): Observable <any>{
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization' : `Bearer ${localStorage.getItem('token')}`
    })
    return this.http.get(this.baseUrl + 'orders/list',{headers:headers});
  }
  addOrder(order: any): Observable <any>{
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization' : `Bearer ${localStorage.getItem('token')}`
    })
    return this.http.post(this.baseUrl + 'orders/', order, {headers:headers});
  }

  modifyOrder(order_id: number, order: any): Observable<any>{
    return this.http.put(this.baseUrl + 'orders/' + order_id, order);
  }

  deleteOrder(order_id: number, order: any): Observable<any>{
    return this.http.delete(this.baseUrl + 'orders/' +  order_id, order);
  }
  
}
