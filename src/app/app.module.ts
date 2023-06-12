import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormComponent } from './components/form/form.component';
import { LoginComponent } from './components/login/login.component';
import { UsersComponent } from './components/users/users.component';
import { OrdersComponent } from './components/orders/orders.component';
import { OrdersService } from './services/orders.service';
import { UsersModule } from './components/users/users.module';
import { ProductsComponent } from './components/products/products.component';
import { ProductsModule } from './components/products/products.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FormComponent,
    LoginComponent,
    OrdersComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    ProductsModule,
    HttpClientModule,
    NgbModule
    
  ],
  providers: [OrdersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
