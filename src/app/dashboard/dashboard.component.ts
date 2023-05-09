import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  showContent = true;
   openSideBar = true;
   constructor(private router: Router) {
    
   }

   logout() {
    localStorage.removeItem('token');
  } 
}
