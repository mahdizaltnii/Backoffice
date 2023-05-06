import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';
import { AuthenticationServiceService } from 'src/app/services/authentication-service.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router:Router,private storageService : StorageService){}

  logout() {
    this.storageService.logout()

    this.router.navigateByUrl('/');
  } 
  
  navigateToEditAccount() {
    this.router.navigate(['dashboard', 'EditAccount']);
  }
  
}
