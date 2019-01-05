import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskManagementComponent } from './task-management/task-management.component';
import { AddtasksComponent } from './task-management/addtasks/addtasks.component';
import { LoginSignupComponent } from './user-management/login-signup/login-signup.component';
const routes: Routes = [
  {path : "" ,pathMatch:"full",component:LoginSignupComponent},
  {path: 'displaytask' ,pathMatch:"full" ,component: TaskManagementComponent},
  {path: 'addtasks' ,pathMatch:"full", component:AddtasksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const rountingComponent = [TaskManagementComponent,AddtasksComponent]
