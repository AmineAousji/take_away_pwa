import { Component, OnInit } from '@angular/core';
import { Category, CategoryService } from '../categories.service';
import{ Coursiers, CoursiersService} from '../coursiers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coursiers',
  templateUrl: './coursiers.component.html',
  styleUrls: ['./coursiers.component.scss'],
})
export class CoursiersComponent  implements OnInit {
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

  coursiers : Coursiers[] = []
  categories: Category[] = []
  modifyCoursierForm: boolean = false;
  delOrMod: boolean = false;
  selectedCoursier: any = {};

  coursier: Coursiers ={name:'', adress:'', recruitment_date:'', Num_tel:'', category_name: '' }
  constructor (
    private categoryService : CategoryService,
    private coursierService : CoursiersService, 
    private routers:Router){}

  ngOnInit() {
    this.coursierService.getCoursierList().subscribe(
      data => {
        this.coursiers = data;
        console.log(this.coursiers);
      }
    )
    this.categoryService.getCategoryList().subscribe(
      data => {
        this.categories = data
        console.log(this.categories)
      }
    )
  }

  getCoursier(coursier: any) {
    this.selectedCoursier = coursier;
    this.modifyCoursierForm = true;
    console.log(this.selectedCoursier.coursier_id);
  }

  updateCoursier(coursier:any): void{
    this.coursierService.modifyCoursier(coursier.coursier_id, coursier).subscribe(() => {
      console.log(coursier);
      this.modifyCoursierForm = false;
    });
  }

  deleteCoursier(coursier:any): void{
    this.coursierService.deleteCoursier(coursier.coursier_id, coursier).subscribe(() => {
      console.log(coursier);
      this.modifyCoursierForm = false;
    });
    this.routers.navigate(['coursiers/list'])
  }

}
