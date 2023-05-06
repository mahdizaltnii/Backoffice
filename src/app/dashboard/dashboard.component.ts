import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
<<<<<<< Updated upstream
=======
  showContent = true;
   openSideBar = true;
   constructor(private router: Router) {
     this.router.events.subscribe(event => {
       if (event instanceof NavigationEnd) {
         if (
          (event.url === '/apointement') || 
          (event.url === '/doctors')|| 
          (event.url === '/training')|| 
          (event.url === '/patients')|| 
          (event.url === '/equipement')||
          (event.url === '/evaluation-training')||
          (event.url === '/EditAccount')       
          ) {
           this.showContent = false;
         } else {
           this.showContent = true;
         }
       }
     });
   }
>>>>>>> Stashed changes


}
