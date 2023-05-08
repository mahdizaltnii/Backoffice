import { Component, OnInit } from '@angular/core';
import { AnalyseService } from '../services/analyse.service';

class Anlysiscenter {
  title:any
  address: any
  phoneNumber: any
  webSite: any
 
}
@Component({
  selector: 'app-analyse-center',
  templateUrl: './analyse-center.component.html',
  styleUrls: ['./analyse-center.component.css']
})
export class AnalyseCenterComponent implements OnInit {
  analyseListe: any
  msgAdded: boolean = false
  analysisCenter = new Anlysiscenter()
  constructor(
    private analyseService: AnalyseService
  ) {

  }
  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.analyseService.getTypeAnalyse().subscribe(res => {
      this.analyseListe = res
      console.log(this.analyseListe)
    })
  }

  addType() {
    // this.analyseService.postTypeAnalyse(this.analysisCenter).subscribe(res=>{
    //   this.msgAdded = true
    //   this.getAll()
    // })
  }

  filterMethode(event: any) {

  }

  goToEdit(data: any) {

  }
  EditType(item :any){
    // this.analyseType = item
    // this.analyseType.analysisDelay = new Date(item.analysisDelay)
  }

  delete(data: any) {

  }
}
