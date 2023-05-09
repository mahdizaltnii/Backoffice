import { Component, OnInit } from '@angular/core';
import { AnalyseService } from '../services/analyse.service';

class AnlyseType {
  idAnalysis: any
  title: any
  description: any
  analysisDelay: any
  dangerous: any
}

@Component({
  selector: 'app-analyse-type',
  templateUrl: './analyse-type.component.html',
  styleUrls: ['./analyse-type.component.css']
})
export class AnalyseTypeComponent implements OnInit {
  analyseTypeListe: any
  msgAdded: boolean = false
  analyseType = new AnlyseType()
  edit: boolean = false
  constructor(
    private analyseService: AnalyseService
  ) {

  }
  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.analyseService.getTypeAnalyse().subscribe(res => {
      this.analyseTypeListe = res
      console.log(this.analyseTypeListe)
    })
  }

  addType() {
    this.analyseService.postTypeAnalyse(this.analyseType).subscribe(res => {
      this.msgAdded = true
      this.getAll()
    })
  }

  EditType(item: any) {
    this.analyseType = item
    this.edit = false
    this.msgAdded = false
  }

  EditFunction() {
    this.analyseService.editTypeAnalyse(this.analyseType).subscribe(res => {
      this.msgAdded = true
      this.edit = true
      this.getAll()
    })
  }

  DeleteType(data: any) {
    if (confirm('are you sure ?')) {
      this.analyseService.deleteTypeAnalyse(data.idAnalysis).subscribe(res => {
        this.getAll()
        alert('Analyse type deleted successfully :)')
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
