import {Component, EventEmitter, Output} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BackOffice';
  showContent = true;
  openSideBar = true;
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if ((event.url === '/apointement') || 
         (event.url === '/doctors')|| 
         (event.url === '/training')|| 
         (event.url === '/patients')|| 
         (event.url === '/equipement')||
         (event.url === '/EditAccount')||
         (event.url === '/leaves')||
         (event.url === '/ahmed') ||
         (event.url === '/internships')
         
         
         ) {
          this.showContent = false;
        } else {
          this.showContent = true;
        }
      }
    });
  }

  
}
