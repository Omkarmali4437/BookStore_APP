import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { AdminloginComponent } from './component/adminlogin/adminlogin.component';
import { HeaderComponent } from './component/header/header.component';
import { UserDashboardComponent } from './component/user-dashboard/user-dashboard.component';

const routes: Routes = [
  {
    path:'adminlogin',
    component: AdminloginComponent
  },
  {
    path:'dashboard',
    component: AdminDashboardComponent
  },
  {
    path: 'userDashboard',
    component: UserDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 
}
