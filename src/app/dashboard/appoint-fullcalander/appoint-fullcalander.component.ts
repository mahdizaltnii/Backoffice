import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-appoint-fullcalander',
  templateUrl: './appoint-fullcalander.component.html',
  styleUrls: ['./appoint-fullcalander.component.css']
})
export class AppointFullcalanderComponent {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin]
  };
}
