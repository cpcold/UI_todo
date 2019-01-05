import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,rountingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { LoginSignupComponent } from './user-management/login-signup/login-signup.component';
import { DisplaytaskComponent } from './task-management/displaytask/displaytask.component';

@NgModule({
  declarations: [
    AppComponent,
    UserManagementComponent,
    LoginSignupComponent,
    rountingComponent,
    DisplaytaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
