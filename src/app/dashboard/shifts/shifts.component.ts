import { Component, OnInit } from '@angular/core';
import { Shift } from '../../core/shift';
import { ShiftService } from '../../services/shift.service';
import { HttpErrorResponse, HttpRequest } from '@angular/common/http';

@Component({
  selector: 'app-shifts',
  templateUrl: './shifts.component.html',
  styleUrls: ['./shifts.component.css']
})
export class ShiftsComponent implements OnInit {
  public shifts: Shift[] = [];
  constructor(private shiftservice:ShiftService) { }

  ngOnInit()  {
  this.getShifts();
  }
  public getShifts():void{
    this.shiftservice.getShifts().subscribe(  
      (response : Shift[]) =>{
        this.shifts=response
      },(error :HttpErrorResponse)=>{
        alert(error.message);
      });
  }

}
