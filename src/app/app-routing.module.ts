import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { AdminloginComponent } from './component/adminlogin/adminlogin.component';
import { HeaderComponent } from './component/header/header.component';

const routes: Routes = [
  {
    path:'adminlogin',
    component: AdminloginComponent
  },
  {
    path:'dashboard',
    component: AdminDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 
}
