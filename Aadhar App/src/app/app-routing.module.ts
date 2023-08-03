import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { CitizenLoginComponent } from './citizen-login/citizen-login.component';
import { CitizenRegisterComponent } from './citizen-register/citizen-register.component';
import { AdminDashBoardComponent } from './admin-dash-board/admin-dash-board.component';
import { CitizenDashBoardComponent } from './citizen-dash-board/citizen-dash-board.component';
import { EditCitizenComponent } from './edit-citizen/edit-citizen.component';
import { NewAadharComponent } from './new-aadhar/new-aadhar.component';
import { RequestDuplicateComponent } from './request-duplicate/request-duplicate.component';
import { CopyComponent } from './copy/copy.component';


import { CitizenGuard } from './citizen.guard';
import { AdminGuard } from './admin.guard';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"adminLogin",component:AdminLoginComponent},
  {path:"adminRegister",component:AdminRegisterComponent},
  {path:"adminHome",component:AdminDashBoardComponent,canActivate:[AdminGuard]},
  {path:"citizenLogin",component:CitizenLoginComponent},
  {path:"citizenRegister",component:CitizenRegisterComponent},
  {path:"citizenHome",component:CitizenDashBoardComponent,canActivate:[CitizenGuard]},
  {path:"update",component:EditCitizenComponent,canActivate:[CitizenGuard]},
  {path:"newArrival",component:NewAadharComponent,canActivate:[AdminGuard]},
  {path:"request",component:RequestDuplicateComponent,canActivate:[AdminGuard]},
  {path:"copy",component:CopyComponent,canActivate:[CitizenGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
