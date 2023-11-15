import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  
  login(username: string, password: string): Observable<boolean> {
    // Replace the following with your actual authentication logic or API call
    return of(true);
  }
}
