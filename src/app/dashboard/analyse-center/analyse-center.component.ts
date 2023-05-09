import { Component, OnInit } from '@angular/core';
import { AnalyseService } from '../services/analyse.service'

class Center {
  idAnalysisCenter: any
  title: any
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




  analyseCenterListe: any
  msgAdded: boolean = false
  analyse = new Center()
  edit: boolean = false
  constructor(
    private analyseService: AnalyseService
  ) {

  }
  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.analyseService.getCenterAnalyse().subscribe(res => {
      this.analyseCenterListe = res
      console.log(this.analyseCenterListe)
    })
  }

  addType() {
    console.log(this.analyse)
    this.analyseService.postCenterAnalyse(this.analyse).subscribe(res => {
      this.msgAdded = true
      this.getAll()
    })
  }

  EditType(item: any) {
    this.analyse = item
    this.edit = false
    this.msgAdded = false
  }

  EditFunction() {
    this.analyseService.editCenterAnalyse(this.analyse).subscribe(res => {
      this.msgAdded = true
      this.edit = true
      this.getAll()
    })
  }

  DeleteType(data: any) {
    if (confirm('are you sure ?')) {
      this.analyseService.deleteCenterAnalyse(data.idAnalysisCentern).subscribe(res => {
        this.getAll()
        alert('Analyse center deleted successfully :)')
      }, err => {
        alert('Server down :(')
      })
    }
  }

  filterMethode(event: any) {

  }

  goToEdit(data: any) {

  }


  delete(data: any) {

  }
}

