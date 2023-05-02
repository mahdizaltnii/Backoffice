import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup, RequiredValidator, Validators} from "@angular/forms";
import {Loginform} from "../loginform";
import {AuthenticationServiceService} from "../services/authentication-service.service";
import { AuthentificationRequest, AuthentificationResponse } from "../loginform";
import { BehaviorSubject } from 'rxjs';
 


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] ,
  providers: [AuthenticationServiceService]

})
export class LoginComponent  {

  myForm !: FormGroup;
  private loggedIn = new BehaviorSubject<boolean>(false);

  
  constructor(private authService: AuthenticationServiceService, private router: Router) {
    
  }

  ngOnInit(){
    this.myForm = new FormGroup({
      email : new FormControl,
      password : new FormControl()
    })
  }

  onSubmit(): void {
    // const request = new AuthentificationRequest();
    // request.email = this.email;
    // request.password = this.password;
    console.log(this.myForm.value)
    this.authService.authenticate(this.myForm.value).subscribe(
      response => { console.log(response)
         // Authentication successful
         const token = response.token;
         // Do something with the token
         localStorage.setItem('token', token);  //save the token in local storage
         console.log(token); // log the token to the console
         this.loggedIn.next(true);
        
         this.router.navigateByUrl('/dashboard');
       },
       error => {
         // Authentication failed
         console.error(error);
       }
    );
  }

  

  logout() {
    localStorage.removeItem('token');
    this.loggedIn.next(false);
  } 
  

  
}
