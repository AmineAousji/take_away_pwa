import { Component } from '@angular/core';
import {AuthService} from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [

    { title: 'Dashboard', url: '/categories/list', icon: 'home' },
    { title: 'Coursiers', url: '/coursiers/list', icon: 'star' },
    { title: 'Orders', url: '/orders/list', icon: 'paper-plane' },
    

  ];
  
  constructor(private authService: AuthService, private router: Router) {}

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
