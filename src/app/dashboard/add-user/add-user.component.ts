import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {


  myForm !: FormGroup;
  addUserForm: FormGroup;

  user!: User;
  constructor(private userservice: UserService,private formBuilder: FormBuilder){
    this.addUserForm = new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      adresse : new FormControl('')
    });
  
  }

  Adduser()
  {
    this.userservice.createUser(this.user).subscribe(
      (data: any) => {
        this.user = data;
        console.log(data)
        this.myForm = new FormGroup({
          firstname: new FormControl(''),
          lastname: new FormControl(''),
          email: new FormControl(''),
          password: new FormControl('')
        });

      },
      error => {
        console.error(error);
      }
    );

  }
  ngOnInit(): void {
    this.addUserForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      adresse: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.addUserForm.valid) {
      const user = this.addUserForm.value;
      this.userservice.createUser(user).subscribe(
        response => {
          console.log(response);
          location.reload();
        },
        error => {
          console.error(error);
        }
      );
    }
  }
  
}
