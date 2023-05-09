import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { User } from '../user';
import { AuthenticationServiceService } from '../services/authentication-service.service';
import { RegisterRequest } from '../loginform';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Component({
  selector: 'app-edit-accounts',
  templateUrl: './edit-accounts.component.html',
  styleUrls: ['./edit-accounts.component.css']
})
export class EditAccountsComponent   {
  myForm !: FormGroup;

  user!: User;
  constructor(private authService: AuthenticationServiceService,private fb: FormBuilder) { }

  ngOnInit() {
    // Get the current user's data
    const token = localStorage.getItem('token');
    if (token)
    {
      this.authService.getUserInfo(token).subscribe(
        (data: any) => {
          this.user = data;
          this.myForm = new FormGroup({
            firstname: new FormControl(''),
            lastname: new FormControl(''),
            email: new FormControl('')
          });

        },
        error => {
          console.log(error);
        }
      );
    }
  
  }

   
  
  

   updateUser(user: User): void {
     const id = user.id;
     console.log('updateUser called with user:', user);

     const request: any = {
       firstname: user.firstname,
       lastname: user.lastname,
       email: user.email,
     };

     console.log(request);

     this.authService.editAccount(id, request).subscribe(
       (response: any) => {
         console.log(response);
         alert('User updated successfully!');
       },
       (error: any) => {
         console.log(error);
       }
     );
   }
  

}
