import { Component,Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  openSideBar = true

  patient = false
 
  @Output() isSidebarOpenChange = new EventEmitter<boolean>();
 
   constructor(private router:Router) { }
   
  public onSave() {
     this.openSideBar = !this.openSideBar
     this.isSidebarOpenChange.emit(this.openSideBar);
 
    
   }
   public onOpenPopup() {
     this.patient = !this.patient
   }
   navigateToAppointements() {
     this.router.navigate(['dashboard', 'apointement']);
   }
   
   navigateToTraining() {
     this.router.navigate(['dashboard', 'training']);
   }
   
   navigateToEquipements() {
     this.router.navigate(['dashboard', 'equipement']);
   }
   
   navigateToPatients() {
     this.router.navigate(['dashboard', 'patients']);
   }
   
   navigateToDoctors() {
     this.router.navigate(['dashboard', 'doctors']);
   }
   
   navigateTotraining() {
     this.router.navigate(['dashboard', 'evaluation']);
   }
  
  navigateToleaves() {
    this.router.navigate(['dashboard', 'leaves']);
  }
  navigateTointernships() {
    this.router.navigate(['dashboard', 'internships']);
  }
  navigateToahmed() {
    this.router.navigate(['dashboard', 'ahmed']);
  }
 
  navigateToquizz() {
    this.router.navigate(['dashboard', 'quizz']);
  }
  navigateToEditAccount() {
    this.router.navigate(['dashboard', 'EditAccount']);
  }
   navigateToDefault() {
     this.router.navigate(['dashboard']);
   }
  
 addpatient() {
 
 
 
 }
   
   
 
 

  
  

  
}
