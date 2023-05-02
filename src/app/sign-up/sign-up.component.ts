import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthenticationServiceService } from '../services/authentication-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  myForm !: FormGroup;
 
  
  constructor(private authService: AuthenticationServiceService, private router: Router) {
    
  }

  ngOnInit(){
    this.myForm = new FormGroup({
      email : new FormControl,
      firstName:new FormControl,
      username:new FormControl,
      lastName:new FormControl,
      password : new FormControl()
    })
  }

  onSubmit(): void {
   
    console.log(this.myForm.value)
    this.authService.register(this.myForm.value).subscribe(
      response => { console.log(response)
         // Authentication successful
         const token = response.token;
         // Do something with the token
         localStorage.setItem('token', token);  //save the token in local storage
         console.log(token); // log the token to the console
         this.router.navigateByUrl('/dashboard');
       },
       error => {
         // Authentication failed
         console.error(error);
       }
    );
  }
}
