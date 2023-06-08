import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddmedicineComponent } from './add-medicine/addmedicine.component';
import { UpdatemedicineComponent } from './update-medicine/updatemedicine.component';



@NgModule({
  declarations: [
    AddmedicineComponent,
    UpdatemedicineComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MedicineModule { }
