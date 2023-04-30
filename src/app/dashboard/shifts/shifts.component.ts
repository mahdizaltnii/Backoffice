import { Component, OnInit } from '@angular/core';
import { Shift } from '../../core/shift';
import { ShiftService } from '../../services/shift.service';
import { HttpErrorResponse, HttpRequest } from '@angular/common/http';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-shifts',
  templateUrl: './shifts.component.html',
  styleUrls: ['./shifts.component.css']
})
export class ShiftsComponent implements OnInit {
  public shifts: Shift[] = [];
  closeResult! : string;
  form : boolean = false;
  shift!:Shift;


  constructor(private shiftservice:ShiftService,private modalService: NgbModal) {
    this.shift ={
      id:null,
      startTime:null,
      endTime:null,
      breakDuration:null,
      breakTime:null,
      interns:null

    }
   }

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

  deleteShift(idProduct : any){
     this.shiftservice.deleteSHift(idProduct).subscribe(() => this.getShifts())
     }

     addShift(s: any){
      this.shiftservice.addShift(s).subscribe(() => {
        this.getShifts();
        this.form = false;
      });
    }

    editShift(idShift : any ,shift : Shift){
      this.shiftservice.UpdateShift(idShift,shift).subscribe();
    }
     open(content: any) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
      }
      private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
          return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
          return 'by clicking on a backdrop';
        } else {
          return  `with: ${reason}`;
        }
      }
      closeForm(){
    
      }
      cancel(){
        this.form = false;
      }
    

}
