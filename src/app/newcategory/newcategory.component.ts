import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService, Category } from '../categories.service';

@Component({
  selector: 'app-newcategory',
  templateUrl: './newcategory.component.html',
  styleUrls: ['./newcategory.component.scss'],
})
export class NewcategoryComponent  implements OnInit {

  categories: Category[] = []


  category: Category = {category_name:'', description:''};
  constructor(private router:Router, private categoryService: CategoryService) { }

  ngOnInit() {}

  addCategory(): void{
    this.categoryService.addCategory(this.category).subscribe(() => {

      this.router.navigate(['categories/list'])
    });
  }

}
