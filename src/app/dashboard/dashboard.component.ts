import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService, Category } from '../categories.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent  implements OnInit {
  public appPages = [

    { title: 'Dashboard', url: '/categories/list', icon: 'home' },
    { title: 'Coursiers', url: '/coursiers/list', icon: 'star' },
    { title: 'Orders', url: '/orders/list', icon: 'paper-plane' },

  ];

  categories: Category[] = []

  constructor(private router:Router, private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getCategoryList().subscribe(
      data => {
        this.categories = data
        console.log(this.categories)
      }
    )
  }
  viewCategory(category:any){
    let category_name = category.category_name;
    console.log('category_name : ', category_name);
    this.router.navigate(['categories',category_name]);
  }

  viewCoursierBycategory(category:any){
    let category_name = category.category_name;
    this.router.navigate(['categories',category_name,'coursiers'])
  }
  newCoursier(): void{
    this.router.navigate(['coursiers']);
  }

  newOrder(): void{
    this.router.navigate(['orders']);
  }

  modifyCategory(category: any) {
    let category_name = category.category_name; 
    console.log('category_name : ', category_name);
    this.router.navigate(['categories', 'modify', category_name]);
  }

  newUser(){
    this.router.navigate(['users']);
  }

  newCategory():void{
    this.router.navigate(['categories','add']);
  }
}
