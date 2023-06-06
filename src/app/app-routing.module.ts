import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './myModules/dashboard/dashboard.component';
import { Dashboard1Component } from './myModules/dashboard1/dashboard1.component';

const routes: Routes = [
  {
    path:'dashboard/dashboard1',
    component:Dashboard1Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
