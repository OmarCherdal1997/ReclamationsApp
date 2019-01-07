import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReclamationsComponent} from './reclamations/reclamations.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { ReclamationDetailsComponent} from './reclamation-details/reclamation-details.component';


const routes: Routes = [
  { path: '', redirectTo: '/Dashboard', pathMatch: 'full' },
  {path:'Reclamations', component: ReclamationsComponent },
  {path:'Dashboard', component: DashboardComponent },
  {path:'detail/:id', component: ReclamationDetailsComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
