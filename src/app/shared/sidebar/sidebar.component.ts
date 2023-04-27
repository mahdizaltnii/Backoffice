import { Component,Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

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
