import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormComponent } from './components/form/form.component';
import { LoginComponent } from './components/login/login.component';
import { AddMedicinesComponent } from './components/medicines/add-medicines/add-medicines.component';
import { MedicinesComponent } from './components/medicines/medicines.component';
import { UpdateMedicinesComponent } from './components/medicines/update-medicines/update-medicines.component';
import { ViewMedicinesComponent } from './components/medicines/view-medicines/view-medicines.component';
import { AddordersComponent } from './components/orders/add-orders/addorders.component';
import { OrdersComponent } from './components/orders/orders.component';
import { UpdateOrdersComponent } from './components/orders/update-orders/update-orders.component';
import { AdduserComponent } from './components/users/add-user/adduser.component';
import { UsersComponent } from './components/users/users.component';
import { ViewusersComponent } from './components/users/view-users/viewusers.component';



const routes: Routes = [   //generating eager load means earger load loads everything at once wen you intializes your anular application
  {"path":"dashboard",component:DashboardComponent},
  {"path":"form",component:FormComponent},
  {"path":"login",component:LoginComponent},
  
  {"path":'users', children: [
    {"path":'', component:UsersComponent},
    {"path":'create', component: AdduserComponent},
    {"path":'update', component: AdduserComponent},
    {"path":'view', component: ViewusersComponent}
  ]},
  {"path":'medicines', children: [
    {"path":'', component:MedicinesComponent},
    {"path":'create', component:AddMedicinesComponent},
    {"path":'update', component:UpdateMedicinesComponent},
    {"path": 'view', component:ViewMedicinesComponent}
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
