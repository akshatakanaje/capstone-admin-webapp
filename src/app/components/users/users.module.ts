import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdduserComponent } from './add-user/adduser.component';
import { ListusersComponent } from './list-users/listusers.component';
import { ViewusersComponent } from './view-users/viewusers.component';
import { UsersService } from 'src/app/services/users.service';
import { UsersComponent } from './users.component';



@NgModule({
  declarations: [
    UsersComponent,
    AdduserComponent,
    ListusersComponent,
    ViewusersComponent
  ],
  imports: [
    CommonModule
  ],
  providers:[UsersService]
})
export class UsersModule { }
