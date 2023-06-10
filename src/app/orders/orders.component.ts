import { Component, OnInit } from '@angular/core';
import {Orders, OrdersService} from '../orders.service'
import{ Coursiers, CoursiersOrder, CoursiersService} from '../coursiers.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['../coursiers/coursiers.component.scss'],
})
export class OrdersComponent  implements OnInit {
  public appPages = [

    { title: 'Dashboard', url: '/categories/list', icon: 'home' },
    { title: 'Coursiers', url: '/coursiers/list', icon: 'star' },
    { title: 'Orders', url: '/orders/list', icon: 'paper-plane' },
    { title: 'Inbox', url: '/folder/inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];

  coursiers : CoursiersOrder[] = []
  orders: Orders[] = []
  modifyOrderForm: boolean = false;
  delOrMod: boolean = false;
  selectedOrder: any = {};

  order: Orders ={
    name_customer: '', 
    name_restaurant: '', 
    adress_customer: '',
    adress_restaurant: '', 
    price: '', 
    distance: '',
    coursier_id: ''
   }

  constructor (
    private orderService : OrdersService,
    private coursiersService : CoursiersService, 
    private routers:Router){}

    ngOnInit() {
      this.orderService.getOrderList().subscribe(
        data => {
          this.orders = data;
          console.log(this.orders);
        }
      )
      this.coursiersService.getCoursierList().subscribe(
        data => {
          this.coursiers = data;
          console.log(this.coursiers);
        }
      )
    }

    getOrder(order: any) {
      this.selectedOrder = order;
      this.modifyOrderForm = true;
      console.log(this.selectedOrder.order_id);
    }
    updateOrder(order:any): void{
      this.orderService.modifyOrder(order.order_id, order).subscribe(() => {
        console.log(order);
        this.modifyOrderForm = false;
      });
    }

    deleteOrder(order:any): void{
      this.orderService.deleteOrder(order.order_id, order).subscribe(() => {
        console.log(order);
        this.modifyOrderForm = false;
      });
      this.routers.navigate(['orders/list'])
    }


}
