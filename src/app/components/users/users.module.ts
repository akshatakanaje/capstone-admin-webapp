import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdduserComponent } from './add-user/adduser.component';
import { ListusersComponent } from './list-users/listusers.component';
import { ViewusersComponent } from './view-users/viewusers.component';



@NgModule({
  declarations: [
    AdduserComponent,
    ListusersComponent,
    ViewusersComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
