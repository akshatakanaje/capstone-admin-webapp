import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddordersComponent } from './add-orders/addorders.component';
import { UpdateOrdersComponent } from './update-orders/update-orders.component';
import { OrdersComponent } from './orders.component';
import { OrdersService } from 'src/app/services/orders.service';



@NgModule({
  declarations: [
    OrdersComponent,
    AddordersComponent,
    UpdateOrdersComponent
  ],
  imports: [
    CommonModule
  ],
  providers:[OrdersService]
})
export class OrdersModule { }
