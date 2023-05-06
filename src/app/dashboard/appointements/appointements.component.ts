import { Component, OnInit } from '@angular/core';
import { AppointementsService } from '../services/appointements.service';

@Component({
  selector: 'app-appointements',
  templateUrl: './appointements.component.html',
  styleUrls: ['./appointements.component.css']
})
export class AppointementsComponent  implements OnInit{
  RVliste : any
  constructor(
    private appoin : AppointementsService
  ){

  }
  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.appoin.getRendezVous().subscribe(res=>{
      this.RVliste = res
      console.log(this.RVliste)
    })
  }

  filterMethode(event : any){

  }

  goToEdit(data : any){

  }

  delete(data:any){
    
  }
}
