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
  stat :any;
  satt:any;


  constructor(private leaveservice: LeaveService) { }

  ngOnInit(): void {
    this.getLeaves();
    this.stats();
    this.statttts();
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
    location.reload();
    }
    editLeave(idLeave : any ,leave : LeaveAuth){
      this.leaveservice.UpdateLeave(idLeave,leave).subscribe();
      location.reload();
    }

    acceptLeave(idLeave : any){
      console.log(idLeave)
      this.leaveservice.acceptLeave(idLeave).subscribe(() => this.getLeaves())
      location.reload();
      }
      reffuseeave(idLeave : any){
        this.leaveservice.refuseLeave(idLeave).subscribe(() => this.getLeaves())
        location.reload();
        }

        stats(){
          this.leaveservice.getLeaveStatisticsByReason().subscribe((response : any) =>{
            this.stat=response
          },(error :HttpErrorResponse)=>{
            alert(error.message);
          });
        }
        statttts(){
          this.leaveservice.getLeaveStatisticsByStatus().subscribe((response : any) =>{
            this.satt=response
          },(error :HttpErrorResponse)=>{
            alert(error.message);
          });
        }

}
