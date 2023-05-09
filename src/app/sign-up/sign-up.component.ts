import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthenticationServiceService } from '../services/authentication-service.service';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  myForm !: FormGroup;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  
  constructor(private authService: AuthenticationServiceService, private router: Router,private storageService: StorageService) {
    
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

    this.authService.register(this.myForm.value).subscribe({
      next: data => {
        this.storageService.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser();
        this.router.navigateByUrl('/dashboard');
        console.log('User roles:', this.roles); // print role information in console
        
        console.log(this.isLoggedIn)
    
      },
      error: err => {
        this.errorMessage = err.error.message;
      }

    });
  }
}
