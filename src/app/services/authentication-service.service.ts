import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
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


}
