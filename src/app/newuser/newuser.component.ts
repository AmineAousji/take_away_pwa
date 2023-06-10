import { Component } from '@angular/core';
import {User, UserLogin, UserService} from '../user.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['../newcategory/newcategory.component.scss']
})
export class NewuserComponent {
  users: UserLogin[] = []
  confirmPassword: string = '';


  user: UserLogin = {login: '', password: ''}
  constructor(private userService: UserService, private router: Router ) {}

  addUser(): void {
    if (this.user.password !== this.confirmPassword) {
      console.error('Les mots de passe ne correspondent pas');
      return;
    }
    this.userService.addUser(this.user).subscribe(() => {
      this.router.navigate(['categories/list']);
    });
  }

}
