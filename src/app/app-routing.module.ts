import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { MapComponent } from './map/map.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent }, 
  { path: '', redirectTo: '/profiles', pathMatch: 'full' },
  { path: 'profiles', component: ProfileListComponent },
  { path: 'map/:address', component: MapComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
