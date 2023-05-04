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
import { AppComponent } from './app.component';

 const routes: Routes = [
  { path: '', component:LoginComponent  },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'apointement', component: AppointementsComponent },
  { path: 'training', component: TrainingComponent },
  { path: 'equipement', component: EquipementsComponent },
  { path: 'patients', component: PatientsComponent },
  { path: 'doctors', component: DoctorsComponent },
  { path: 'EditAccount', component: EditAccountsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
