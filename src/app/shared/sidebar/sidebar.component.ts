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

 @Output() isSidebarOpenChange = new EventEmitter<boolean>();

  constructor() { }
  
 public onSave() {
    this.openSideBar = !this.openSideBar
    this.isSidebarOpenChange.emit(this.openSideBar);

   
  }
 

  
  

  
}
