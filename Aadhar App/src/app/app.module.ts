import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { CitizenLoginComponent } from './citizen-login/citizen-login.component';
import { CitizenRegisterComponent } from './citizen-register/citizen-register.component';
import { HomeComponent } from './home/home.component';
import { AdminDashBoardComponent } from './admin-dash-board/admin-dash-board.component';
import { CitizenDashBoardComponent } from './citizen-dash-board/citizen-dash-board.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';


import {ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NewAadharComponent } from './new-aadhar/new-aadhar.component';
import { RequestDuplicateComponent } from './request-duplicate/request-duplicate.component';
import { EditCitizenComponent } from './edit-citizen/edit-citizen.component';
import { CopyComponent } from './copy/copy.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    CitizenLoginComponent,
    CitizenRegisterComponent,
    HomeComponent,
    AdminDashBoardComponent,
    CitizenDashBoardComponent,
    AdminRegisterComponent,
    NewAadharComponent,
    RequestDuplicateComponent,
    EditCitizenComponent,
    CopyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
