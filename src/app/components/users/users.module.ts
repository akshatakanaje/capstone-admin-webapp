import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdduserComponent } from './add-user/adduser.component';
import { ListusersComponent } from './list-users/listusers.component';
import { ViewusersComponent } from './view-users/viewusers.component';
import { UsersService } from 'src/app/services/users.service';



@NgModule({
  declarations: [
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
