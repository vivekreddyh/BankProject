import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { PhnUIComponent } from './phn-ui/phn-ui.component';
import { NewUICompComponent } from './new-uicomp/new-uicomp.component';
import { RoutingModule } from './routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { PasswordresetComponent } from './passwordreset/passwordreset.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerLoginComponent,
    UserLoginComponent,
    PhnUIComponent,
    NewUICompComponent,
    HomepageComponent,
    PasswordresetComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
