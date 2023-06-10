import { Component, OnInit } from '@angular/core';
import { Category, CategoryService } from '../categories.service';
import{ Coursiers, CoursiersService} from '../coursiers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newcoursier',
  templateUrl: './newcoursier.component.html',
  styleUrls: ['../neworder/neworder.component.scss'],
})
export class NewcoursierComponent  implements OnInit {

  coursiers : Coursiers[] = []
  categories: Category[] = []

  coursier: Coursiers ={name:'', adress:'', recruitment_date:'', Num_tel:'', category_name: '' }
  constructor (
    private categoryService : CategoryService,
    private coursierService : CoursiersService, 
    private routers:Router){}


  ngOnInit() {
    this.categoryService.getCategoryList().subscribe(
      data => {
        this.categories = data
        console.log(this.categories)
      }
    )
  }

  addCoursier(): void{
    this.coursierService.addCoursier(this.coursier).subscribe(() => {
      this.routers.navigate(['coursiers/list'])
    });
  }

}
