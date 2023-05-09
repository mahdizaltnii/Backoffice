import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationServiceService } from '../services/authentication-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authservice:AuthenticationServiceService,private router:Router){}
  canActivate()
   { if (this.authservice.isLoggedIn()) {
    return true;
   }
    this.router.navigate(['']);
    return false;
  }
  
}
