import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthentificationRequest, AuthentificationResponse, Loginform, RegisterRequest} from "../loginform";
import {BehaviorSubject, Observable, of, tap} from "rxjs";
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  // constructor(private httpClient:HttpClient) { }
  // authenticate(userObj:Loginform): Observable<any> {
  //   return this.httpClient.post<any>('http://localhost:8083/auth/api/authenticate',userObj);
  // }

  // isUserLoggedIn() {
  //   let user = localStorage.getItem('token');
  //   return !(user === null);
  // }


  private readonly apiUrl = 'http://localhost:8083/auth/api/';
  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(private http: HttpClient) {
    const token = localStorage.getItem('token');
    if (token) {
      this.loggedIn.next(true);
    }
   }

   authenticate(request: AuthentificationRequest): Observable<AuthentificationResponse> {
     return this.http.post<AuthentificationResponse>(this.apiUrl+'authenticate', request);
   }


  register(request:RegisterRequest): Observable<AuthentificationResponse> {
    return this.http.post<AuthentificationResponse>(this.apiUrl +'register', request);
  }
  editAccount(id: number, request: RegisterRequest): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}${id}/edit`, request);
  }
  
  getCurrentUser(): Observable<User> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.get<User>(this.apiUrl+'current', { headers });
  }
  getUserInfo(token: string) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(this.apiUrl+'info', { headers });
  }

}
