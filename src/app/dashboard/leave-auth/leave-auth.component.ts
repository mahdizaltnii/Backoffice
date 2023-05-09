import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LeaveAuth } from 'src/app/core/leaveAuth';
import { LeaveService } from 'src/app/services/leave.service';

@Component({
  selector: 'app-leave-auth',
  templateUrl: './leave-auth.component.html',
  styleUrls: ['./leave-auth.component.css']
})
export class LeaveAuthComponent implements OnInit {


  leaves:any;


  constructor(private leaveservice: LeaveService) { }

  ngOnInit(): void {
    this.getLeaves();
  }


  public getLeaves():void{
    this.leaveservice.getLeaves().subscribe(  
      (response : LeaveAuth[]) =>{
        this.leaves=response
      },(error :HttpErrorResponse)=>{
        alert(error.message);
      });
  }
  deleteLeave(idLeave : any){
    this.leaveservice.deleteLeave(idLeave).subscribe(() => this.getLeaves())
    }
    editLeave(idLeave : any ,leave : LeaveAuth){
      this.leaveservice.UpdateLeave(idLeave,leave).subscribe();
    }

    acceptLeave(idLeave : any){
      console.log(idLeave)
      this.leaveservice.acceptLeave(idLeave).subscribe(() => this.getLeaves())
      }
      reffuseeave(idLeave : any){
        this.leaveservice.refuseLeave(idLeave).subscribe(() => this.getLeaves())
        }

}
