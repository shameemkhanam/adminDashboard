import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard1Component } from './dashboard1.component';

const routes: Routes = [
  {
    path:'', redirectTo:'dashboard/dashboard1', pathMatch:'full'
  },
  {
    path:'dashboard1',
    component:Dashboard1Component
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Dashboard1RoutingModule { }
