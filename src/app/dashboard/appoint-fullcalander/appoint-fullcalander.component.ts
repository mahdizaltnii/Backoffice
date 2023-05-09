import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { AppointementsService } from '../services/appointements.service';

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
  firstName : any
  lastName : any
}

@Component({
  selector: 'app-appoint-fullcalander',
  templateUrl: './appoint-fullcalander.component.html',
  styleUrls: ['./appoint-fullcalander.component.css']
})
export class AppointFullcalanderComponent implements OnInit {
  calendarOptions: CalendarOptions = {
    initialView: 'timeGridWeek',
    headerToolbar: {
      left: 'prev,next',
      center: 'title',
      right: 'timeGridWeek,timeGridDay' // user can switch between the two
    },
    events: [


    ],
    plugins: [timeGridPlugin]
  };
  arrayData: any = []



  RVliste: any
  appoint = new Appointement()




  constructor(private appoin: AppointementsService) { }

  ngOnInit(): void {
    this.getAll()
  }


  addApp() {
    this.appoint.requestDate = new Date()
    this.appoint.status = "PENDING"
    this.appoint.reportsReady = false
    this.appoint.is_Validated_By_Admin = true
    console.log(this.appoint)
    this.appoin.postRendezVous(this.appoint).subscribe(res => {
      console.log(res)
      this.getAll()
      
    })
  }


  getAll() {
    this.appoin.getRendezVous().subscribe(res => {
      this.RVliste = res
      console.log(this.RVliste)
      this.RVliste.map((i: any) => {
        var obj = {
          title: `${i.firstName} ${i.lastName}`,
          start: i.appointmentDate,
          allDay: false
        }
        this.arrayData.push(obj)
        this.calendarOptions.events = this.arrayData
      })
    })
  }


}
