import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../user';
import {BehaviorSubject, Observable, of, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly apiUrl = 'http://localhost:8083/auth/api/';

  constructor(private http: HttpClient) { }

  // Create a new user
  createUser(user: User): Observable<User> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<User>(this.apiUrl, user, { headers });
  }

  // Get all users
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  // Get a single user by id
  getUserById(id: number): Observable<User> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<User>(url);
  }

  // Update a user
  updateUser(user: User): Observable<any> {
    const url = `${this.apiUrl}/${user.id}`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put(url, user, { headers });
  }

  // Delete a user
  deleteUser(id: number) {
    const url = `${this.apiUrl}${id}`;
    return this.http.delete(url);
    
  }
}
