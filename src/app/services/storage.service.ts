import { Injectable } from '@angular/core';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  clean(): void {
    window.sessionStorage.clear();
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

    public getUser(): any {
      const user = window.sessionStorage.getItem(USER_KEY);
      console.log(user)
      if (user) {
        return JSON.parse(user);
      }

      return {};
    }
  //public getUser(): any {
    //const user = window.sessionStorage.getItem(USER_KEY);
    //console.log(user)
    // if (user) {
    //   const base64Url = user.split('.')[1];
    //   const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    //   const jsonPayload = decodeURIComponent(atob(base64).split('').map(c => `%${(`00${c.charCodeAt(0).toString(16)}`)}`.slice(-2)).join(''));
    //   const payload = JSON.parse(jsonPayload);
    //   window.sessionStorage.setItem(USER_KEY, JSON.stringify(payload)); // store user object in session storage
    //   return payload;
    // }
  //  return {};
  //}
  

  
  public getRole(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user).role;
    }
    return {};
  }
  // public getUser(): any {
  //   const user = window.sessionStorage.getItem(USER_KEY);
  //   console.log('user:', user);
  //   if (user) {
  //     const base64Url = user.split('.')[1];
  //     const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  //     const jsonPayload = decodeURIComponent(atob(base64).split('').map(c => `%${(`00${c.charCodeAt(0).toString(16)}`)}`.slice(-2)).join(''));
  //     console.log('jsonPayload:', jsonPayload);
  //     const payload = JSON.parse(jsonPayload);
  //     return payload;
  //   }
  //   return {};
  // }
  
  
  

  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return true;
    }

    return false;
  }

  logout(): void {
    window.sessionStorage.removeItem(USER_KEY);
  }
  
}
