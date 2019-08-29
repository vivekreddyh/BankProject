import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';

import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { PhnUIComponent } from './phn-ui/phn-ui.component';
import { NewUICompComponent } from './new-uicomp/new-uicomp.component';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PasswordresetComponent } from './passwordreset/passwordreset.component';


export const router:Routes=[
  {path:"",redirectTo:"app",pathMatch:"full"},
  {path:"app",component:HomepageComponent},
  {path:"otp",component:PhnUIComponent},
  {path:"adminlogin",component:UserLoginComponent},
  {path:"customerlogin",component:CustomerLoginComponent},
  {path:"customerdashboard",component:NewUICompComponent},
  {path:"passwordreset",component:PasswordresetComponent}

];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(router)  
  ],
  exports:[RouterModule]
})
export class RoutingModule { }
