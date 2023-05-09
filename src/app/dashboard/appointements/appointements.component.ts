import { Component, OnInit } from '@angular/core';
import { AppointementsService } from '../services/appointements.service';


//entety / class
class Appointement {
  idAppointement: any
  requestDate: any
  appointmentDate: any
  status: any
  analysisCenter: any
  analysisType: any
  user: any
  medicalReports: any
  medecin: any
  type: any
  center: any
  email: any
  reportsReady: any
  is_Validated_By_Admin: any
}


@Component({
  selector: 'app-appointements',
  templateUrl: './appointements.component.html',
  styleUrls: ['./appointements.component.css']
})

export class AppointementsComponent implements OnInit {
  //table
  RVliste: any
  statusSelect : any
  //condition
  msgAdded: boolean = false
  edit: boolean = false
  msgEdit: boolean = false
  idst : any

  //entity
  appoint = new Appointement()

  constructor(
    private appoin: AppointementsService
  ) {

  }

  ngOnInit(): void {
    this.getAll()
  }
  //tjrs get all appointment
  getAll() {
    this.appoin.getRendezVous().subscribe(res => {
      this.RVliste = res
      console.log(this.RVliste)
    })
  }

  recherche(event : any){
    var item = event.target.value
    if(item == ''){
      this.getAll()
    }else{
      this.appoin.getRendezVous().subscribe(res => {
        this.RVliste = res
        this.RVliste = this.RVliste.filter((i:any)=>{
          if(i.firstName.toLowerCase().indexOf(item.toLowerCase()) != -1){

            return i
          }
        })
      })

    }
    console.log(item)
  }
  
  postStatus(){
    this.appoin.postChangeStatus(this.idst , this.statusSelect).subscribe(res=>{
      console.log(res)
      this.getAll()
    },err =>{
      this.getAll()

    })
  }

  //ken mot raw jrayrek

  changeStatus(item : any){
    console.log(item)
    this.idst = item.idAppointement
    
    // ken mot raw joret projet mtek hhhhh
  }
  //add and edit selon la condition
  addAppoint() {
    this.msgEdit = false
    //tjrs fixe
    this.appoint.status = "PENDING"
    this.appoint.reportsReady = false
    this.appoint.is_Validated_By_Admin = true
    //Si edit => condition dans la methode editDialog => si on click sur edit on....
    if (this.edit) {
      this.appoin.editRendezVous(this.appoint).subscribe(res => {
        console.log(res)
        this.msgAdded = true
        this.getAll()
        //nejbed mel 3dham
        this.appoint = new Appointement
        this.msgEdit = true
        //Si j'ai pas d'error le dialog back to add par defaut
        this.edit = false
      })
    } else {
      //si add
      this.appoin.postRendezVous(this.appoint).subscribe(res => {
        console.log(res)
        this.msgAdded = true
        this.getAll()
        //moooooooooooooooooooooooooooooot
        this.appoint = new Appointement
        //Si j'ai pas d'error le dialog back to add par defaut
        this.edit = false
      })
    }
  }

  //show me the Add card an tant qye edit function
  editDialog(item: any) {
    this.edit = true
    this.appoint = item
    this.appoint.requestDate = this.appoint.requestDate
    this.appoint.appointmentDate = this.appoint.appointmentDate
  }

  deleteAppointe(data: any) {
    if (confirm('are you sure ?')) {
      this.appoin.deleteRendezVous(data.idAppointement).subscribe(res => {
        this.getAll()
        alert('Appointement deleted successfully :)')
      }, err => {
        alert('Server down :(')
      })
    }
  }

  filterMethode(event: any) {

  }

  goToEdit(data: any) {

  }

}
