import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../interfaces/User';

const httpOption = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = "http://localhost:3000/users"

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  getUser(id: string): Observable<User> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<User>(url);
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user, httpOption);
  }

  deleteUser(user: User): Observable<User> {
    const url = `${this.apiUrl}/${user.id}`;
    return this.http.delete<User>(url);
  }

  editUser(id:string, user: User): Observable<User> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<User>(url, user);
  }
}
