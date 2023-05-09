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
    { title: 'Inbox', url: '/folder/inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/spam', icon: 'warning' },
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
}
