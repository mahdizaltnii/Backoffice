import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {LoginComponent} from "./login/login.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import { AppointementsComponent } from './dashboard/appointements/appointements.component';
import { TrainingComponent } from './dashboard/training/training.component';
import { EquipementsComponent } from './dashboard/equipements/equipements.component';
import { PatientsComponent } from './dashboard/patients/patients.component';
import { DoctorsComponent } from './dashboard/doctors/doctors.component';
import { EditAccountsComponent } from './edit-accounts/edit-accounts.component';
import { InternComponent } from './dashboard/intern/intern.component';
import { InternshipRequestComponent } from './dashboard/internship-request/internship-request.component';
import { LeaveAuthComponent } from './dashboard/leave-auth/leave-auth.component';
import { ShiftsComponent } from './dashboard/shifts/shifts.component';
import {
  EvaluationTrainingComponent
} from "./dashboard/evaluationTraining/evaluation-training/evaluation-training.component";
import { AnalyseTypeComponent } from './dashboard/analyse-type/analyse-type.component';
import { AppointFullcalanderComponent } from './dashboard/appoint-fullcalander/appoint-fullcalander.component';



 const routes: Routes = [
  { path: '', component:LoginComponent  },
  { path: 'admin/dashboard', component: DashboardComponent },
  { path: 'admin/signup', component: SignUpComponent },
  { path: 'admin/apointement', component: AppointementsComponent },
  { path: 'admin/apointement/fullcalander', component: AppointFullcalanderComponent },
  { path: 'admin/analyse-type', component: AnalyseTypeComponent },
  { path: 'admin/training', component: TrainingComponent },
  { path: 'admin/equipements', component: EquipementsComponent },
  { path: 'admin/patients', component: PatientsComponent },
  { path: 'admin/doctors', component: DoctorsComponent },
  { path: 'admin/internships', component: InternshipRequestComponent },
  { path: 'admin/leaves', component: LeaveAuthComponent },
  { path: 'admin/ahmed', component: ShiftsComponent },
   { path: 'admin/login', component: LoginComponent },
   { path: 'admin/EditAccount', component: EditAccountsComponent },
   { path: 'admin/signup', component: SignUpComponent },
   { path: 'admin/evaluation', component: EvaluationTrainingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
