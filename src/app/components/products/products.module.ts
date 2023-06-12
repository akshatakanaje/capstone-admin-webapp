import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductsComponent } from './add-products/add-products.component';
import { UpdateProductsComponent } from './update-products/update-products.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';
import { ViewProductsComponent } from './view-products/view-products.component';
import { ProductsComponent } from './products.component';




@NgModule({
  declarations: [
    ProductsComponent,
    AddProductsComponent,
    UpdateProductsComponent,
    ViewProductsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers:[ProductsService]
})
export class ProductsModule { }
