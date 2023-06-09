import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
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
import { JwtHelperService } from '@auth0/angular-jwt';
import { SharedLayoutsComponent } from './dashboard/dashboard-components/shared-layouts/shared-layouts.component';
import { AddUserComponent } from './dashboard/add-user/add-user.component';
import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from '@abacritt/angularx-social-login';
import { GoogleSigninButtonModule } from '@abacritt/angularx-social-login';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ShiftsComponent } from './dashboard/shifts/shifts.component';
import { LeaveAuthComponent } from './dashboard/leave-auth/leave-auth.component';
import { InternshipRequestComponent } from './dashboard/internship-request/internship-request.component';
import { ShiftService } from './services/shift.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EvaluationTrainingComponent } from './dashboard/evaluationTraining/evaluation-training/evaluation-training.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AnalyseTypeComponent } from './dashboard/analyse-type/analyse-type.component';
import { AnalyseCenterComponent } from './dashboard/analyse-center/analyse-center.component';
import { AppointFullcalanderComponent } from './dashboard/appoint-fullcalander/appoint-fullcalander.component';
import { FullCalendarModule } from '@fullcalendar/angular';


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
    SharedLayoutsComponent,
    AddUserComponent,
    ShiftsComponent,
    LeaveAuthComponent,
    InternshipRequestComponent,
    AnalyseTypeComponent,
    AnalyseCenterComponent,
    AppointFullcalanderComponent  

  ],
  imports: [
   BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,   
     HttpClientModule,
     ReactiveFormsModule,
     FormsModule,
     SocialLoginModule,
     GoogleSigninButtonModule,
     MatSnackBarModule
  ],
  providers: [ 
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '712508135447-r09sm268qj5sapublk4r6cvlac3jko8u.apps.googleusercontent.com'
            )
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],

    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    NgbModalModule,
    RouterModule,
    ReactiveFormsModule   ,
    FullCalendarModule 
  ],
  providers: [ShiftService],
  bootstrap: [AppComponent]
})
export class AppModule { }
