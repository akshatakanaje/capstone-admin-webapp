import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormComponent } from './components/form/form.component';
import { LoginComponent } from './components/login/login.component';
import { AddmedicineComponent } from './components/medicine/add-medicine/addmedicine.component';
import { MedicineComponent } from './components/medicine/medicine.component';
import { UpdatemedicineComponent } from './components/medicine/update-medicine/updatemedicine.component';
import { AddordersComponent } from './components/orders/add-orders/addorders.component';
import { OrdersComponent } from './components/orders/orders.component';
import { UpdateOrdersComponent } from './components/orders/update-orders/update-orders.component';
import { AdduserComponent } from './components/users/add-user/adduser.component';
import { UsersComponent } from './components/users/users.component';
import { ViewusersComponent } from './components/users/view-users/viewusers.component';



const routes: Routes = [
  {"path":"dashboard",component:DashboardComponent},
  {"path":"form",component:FormComponent},
  {"path":"login",component:LoginComponent},
  {"path":'users', children: [
    {"path":'', component:UsersComponent},
    {"path":'create', component: AdduserComponent},
    {"path":'update', component: AdduserComponent},
    {"path":'view', component: ViewusersComponent}
  ]},
  {"path":'medicine', children: [
    {"path":'', component:MedicineComponent},
    {"path":'create', component:AddmedicineComponent},
    {"path":'update', component:UpdatemedicineComponent}
  ]},
  {"path": 'orders', children: [
    {"path":'', component:OrdersComponent},
    {"path":'create', component:AddordersComponent},
    {"path":'update', component:UpdateOrdersComponent}
  ]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
