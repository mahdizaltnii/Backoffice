import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent {
  users!: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }


  onDeleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(
      response => {
        console.log(response);
        location.reload();      },
      error => {
        console.error(error);
      }
    );
    }

    delete(id:number)
    {
      if (confirm('are you sure ?')) {
        this.userService.deleteUser(id).subscribe(res => {
          this.userService.getUsers()
          alert('User  deleted successfully :)')
        }, err => {
          alert('Server down :(')
        })
      }
    }
  
    
    
}
