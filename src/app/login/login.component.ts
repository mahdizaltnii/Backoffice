import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup, RequiredValidator, Validators} from "@angular/forms";
import {Loginform} from "../loginform";
import {AuthenticationServiceService} from "../services/authentication-service.service";
import { AuthentificationRequest, AuthentificationResponse } from "../loginform";
import { BehaviorSubject } from 'rxjs';
import { StorageService } from '../services/storage.service';
import { User } from '../user';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] ,
  providers: [AuthenticationServiceService]

})
export class LoginComponent  {

  myForm !: FormGroup;
  private loggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles!: string[] ;
  
  constructor(private authService: AuthenticationServiceService, private router: Router,private storageService: StorageService) {
    
  }

  ngOnInit(){
    this.myForm = new FormGroup({
      email : new FormControl,
      password : new FormControl()

    })
   

  }

 

   onSubmit(): void {
 
   console.log(this.myForm.value)
   this.authService.authenticate(this.myForm.value).subscribe(
     response => { console.log(response)
       //  Authentication successful
          const token = response.token;
        // Do something with the token
          localStorage.setItem('token', token);//save the token in local storage
         console.log(token); //log the token to the console
          this.authService.getUserInfo(token).subscribe(
           (data: any) => {
              console.log(data.roles)

             
           },
           error => {
             console.log(error);
           }
          );
         this.loggedIn.next(true);
    
        
          this.router.navigateByUrl('/dashboard');
        },
        error => {
        // Authentication failed
          console.error(error);
        }
     );
     }

     
  // onSubmit(): void {
  //   console.log(this.myForm.value)

  //   this.authService.authenticate(this.myForm.value).subscribe({
  //     next: data => {
  //       this.storageService.saveUser(data);
  //       console.log(data)
  //       console.log(this.storageService.saveUser(data))
  //       this.isLoginFailed = false;
  //       this.isLoggedIn = true;
  //       //this.roles = this.storageService.getUser();
  //       this.router.navigateByUrl('/dashboard');
  //      // console.log('User details:', this.storageService.getUser()); // print role information in console
  //      // console.log(this.isLoggedIn)
  //       const token = sessionStorage.getItem('token')
  //       console.log(token)
    
  //     },
  //     error: err => {
  //       this.errorMessage = err.error.message;
  //       this.isLoginFailed = true;
  //     }

  //   });
  // }
 

  reloadPage(): void {
    window.location.reload();
  }

  logout() {
this.storageService.logout()
    this.loggedIn.next(false);
    } 
  

  
}
