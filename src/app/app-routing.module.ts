import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AppointementsComponent } from './dashboard/appointements/appointements.component';
import { TrainingComponent } from './dashboard/training/training.component';
import { EquipementsComponent } from './dashboard/equipements/equipements.component';
import { PatientsComponent } from './dashboard/patients/patients.component';
import { DoctorsComponent } from './dashboard/doctors/doctors.component';
import { EditAccountsComponent } from './edit-accounts/edit-accounts.component';
import { AppComponent } from './app.component';
import { SharedLayoutsComponent } from './dashboard/dashboard-components/shared-layouts/shared-layouts.component';
import { AuthGuard } from './_shared/auth.guard';
import { InternComponent } from './dashboard/intern/intern.component';
import { InternshipRequestComponent } from './dashboard/internship-request/internship-request.component';
import { LeaveAuthComponent } from './dashboard/leave-auth/leave-auth.component';
import { ShiftsComponent } from './dashboard/shifts/shifts.component';
import { EvaluationTrainingComponent} from "./dashboard/evaluationTraining/evaluation-training/evaluation-training.component";

import { InternshipRequestComponent } from './dashboard/internship-request/internship-request.component';
import { LeaveAuthComponent } from './dashboard/leave-auth/leave-auth.component';
import { ShiftsComponent } from './dashboard/shifts/shifts.component';
import { EvaluationTrainingComponent } from './dashboard/evaluationTraining/evaluation-training/evaluation-training.component';
import { AnalyseTypeComponent } from './dashboard/analyse-type/analyse-type.component';
import { AppointFullcalanderComponent } from './dashboard/appoint-fullcalander/appoint-fullcalander.component';
 

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'apointement', component: AppointementsComponent },
      { path: 'training', component: TrainingComponent },
      { path: 'equipement', component: EquipementsComponent },
      { path: 'patients', component: PatientsComponent },
      { path: 'doctors', component: DoctorsComponent },
      { path: 'EditAccount', component: EditAccountsComponent },
      { path: 'evaluation', component: EvaluationTrainingComponent },
      { path: 'internships', component: InternshipRequestComponent },
      { path: 'leaves', component: LeaveAuthComponent },
      { path: 'ahmed', component: ShiftsComponent },
      { path: 'analyse-type', component: AnalyseTypeComponent },
      {
        path: 'apointement/fullcalander',
        component: AppointFullcalanderComponent,
      },
    ],
  },
  { path: 'signup', component: SignUpComponent },
  { path: '**', redirectTo: '' },
];


 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
