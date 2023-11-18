import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../interfaces/User';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private static readonly ADMIN_CREDENTIALS = { username: 'admin', password: 'admin123' };
  private static readonly USER_CREDENTIALS = { username: 'user', password: 'user123' };
  private readonly USER_KEY = 'user';
  private loggedInUser: User | null = JSON.parse(this.localStorageService.getItem(this.USER_KEY));

  constructor(private localStorageService: LocalStorageService) {}

  login(username: string, password: string): Observable<boolean> {
    if (username === AuthService.ADMIN_CREDENTIALS.username && password === AuthService.ADMIN_CREDENTIALS.password) {
      this.loggedInUser = { username, name: "admin", email: "admin@email.com", role: 0 };
      this.localStorageService.setItem(this.USER_KEY, JSON.stringify(this.loggedInUser));
      return of(true);
    } else if (username === AuthService.USER_CREDENTIALS.username && password === AuthService.USER_CREDENTIALS.password) {
      this.loggedInUser = { username, name: "user", email: "user@email.com", role: 1 };
      this.localStorageService.setItem(this.USER_KEY, JSON.stringify(this.loggedInUser));
      return of(true);
    } else {
      this.loggedInUser = null;
      this.localStorageService.clear();
      return of(false);
    }
  }
  
  getLoggedInUser(): User | null {
    return this.loggedInUser;
  }

  logout() {
    this.localStorageService.clear()
    this.loggedInUser = null;
  }
}
