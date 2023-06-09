import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !!token; 
  }

  logout() {
    localStorage.removeItem('token');
    this.isLoggedIn = false;
  }

  constructor() { }
}
