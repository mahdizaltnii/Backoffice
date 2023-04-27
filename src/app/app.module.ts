import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopCardsComponent } from './dashboard/dashboard-components/top-cards/top-cards.component';
import { HospitalSurveyComponent } from './dashboard/dashboard-components/hospital-survey/hospital-survey.component';
import { LastAppointementsComponent } from './dashboard/dashboard-components/last-appointements/last-appointements.component';
import { PatientsDetailsComponent } from './dashboard/dashboard-components/patients-details/patients-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppointementsComponent } from './dashboard/appointements/appointements.component';
import { DoctorsComponent } from './dashboard/doctors/doctors.component';
import { PatientsComponent } from './dashboard/patients/patients.component';
import { TrainingComponent } from './dashboard/training/training.component';
import { EquipementsComponent } from './dashboard/equipements/equipements.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { EditAccountsComponent } from './edit-accounts/edit-accounts.component';
import { ShiftsComponent } from './dashboard/shifts/shifts.component';
import { LeaveAuthComponent } from './dashboard/leave-auth/leave-auth.component';
import { InternshipRequestComponent } from './dashboard/internship-request/internship-request.component';

@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    TopCardsComponent,
    HospitalSurveyComponent,
    LastAppointementsComponent,
    PatientsDetailsComponent,
    AppointementsComponent,
    DoctorsComponent,
    PatientsComponent,
    TrainingComponent,
    EquipementsComponent,
    LoginComponent,
    SignUpComponent,
    EditAccountsComponent,
    ShiftsComponent,
    LeaveAuthComponent,
    InternshipRequestComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
