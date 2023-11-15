import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private static readonly ADMIN_CREDENTIALS = { username: 'admin', password: 'admin123' };
  private static readonly USER_CREDENTIALS = { username: 'user', password: 'user123' };
  private loggedInUser: { username: string, role: string } | null = null;

  login(username: string, password: string): Observable<boolean> {
    if (username === AuthService.ADMIN_CREDENTIALS.username && password === AuthService.ADMIN_CREDENTIALS.password) {
      this.loggedInUser = { username, role: 'admin' };
      return of(true);
    } else if (username === AuthService.USER_CREDENTIALS.username && password === AuthService.USER_CREDENTIALS.password) {
      this.loggedInUser = { username, role: 'user' };
      return of(true);
    } else {
      this.loggedInUser = null;
      return of(false);
    }
  }
  
  getLoggedInUser(): { username: string, role: string } | null {
    return this.loggedInUser;
  }

  logout() {
    this.loggedInUser = null;
  }
}
