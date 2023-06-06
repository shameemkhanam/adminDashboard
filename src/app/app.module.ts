import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { DashboardModule } from './myModules/dashboard/dashboard.module';
import { RouterModule } from '@angular/router';
import { Dashboard1Module } from './myModules/dashboard1/dashboard1.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MaterialModule,
    DashboardModule,
    RouterModule,
    Dashboard1Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
