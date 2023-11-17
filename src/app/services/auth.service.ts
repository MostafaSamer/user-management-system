import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private static readonly ADMIN_CREDENTIALS = { username: 'admin', password: 'admin123' };
  private static readonly USER_CREDENTIALS = { username: 'user', password: 'user123' };
  private loggedInUser: User | null = null;

  login(username: string, password: string): Observable<boolean> {
    if (username === AuthService.ADMIN_CREDENTIALS.username && password === AuthService.ADMIN_CREDENTIALS.password) {
      this.loggedInUser = { username, name: "admin", email: "admin@email.com", role: 0 };
      return of(true);
    } else if (username === AuthService.USER_CREDENTIALS.username && password === AuthService.USER_CREDENTIALS.password) {
      this.loggedInUser = { username, name: "user", email: "user@email.com", role: 1 };
      return of(true);
    } else {
      this.loggedInUser = null;
      return of(false);
    }
  }
  
  getLoggedInUser(): User {
    return {
      id: 99,
      name: "Mostafa",
      email: "mostafasamer1999@hotmail.com",
      role: 1,
      username: "mostafasamer"
    }
    // return this.loggedInUser;
  }

  logout() {
    this.loggedInUser = null;
  }
}
