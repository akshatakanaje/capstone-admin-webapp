import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddordersComponent } from './add-orders/addorders.component';
import { UpdateOrdersComponent } from './update-orders/update-orders.component';



@NgModule({
  declarations: [
    AddordersComponent,
    UpdateOrdersComponent
  ],
  imports: [
    CommonModule
  ]
})
export class OrdersModule { }
