import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MyapprovalsComponent } from './myapprovals/myapprovals.component';
import { MytimesheetComponent } from './mytimesheet/mytimesheet.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {
    path:'',component:LoginComponent,
  },
  {
    path:'register',component:RegistrationComponent,
  },
  {
    path:'profile',component:ProfileComponent,
  },
  {
    path:'mytimesheet',component:MytimesheetComponent
  },
  {
    path:'myapprovals',component:MyapprovalsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
