import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { BirdRecordComponent } from './birdrecord/birdrecord.component';
import { ProfilesComponent } from './profiles/profiles.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },  
  { path: 'userlist', component: ProfilesComponent },
  { path: 'birdrecords/:code', component: BirdRecordComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
