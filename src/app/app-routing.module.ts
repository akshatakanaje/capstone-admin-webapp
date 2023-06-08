import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditMedicineComponent } from './components/edit-medicine/edit-medicine.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { FormComponent } from './components/form/form.component';
import { LoginComponent } from './components/login/login.component';
import { MedDetailsComponent } from './components/med-details/med-details.component';
import { MedicineFormComponent } from './components/medicine-form/medicine-form.component';
import { MedicineComponent } from './components/medicine/medicine.component';
import { UserdetailsComponent } from './components/userdetails/userdetails.component';
import { UserlistComponent } from './components/userlist/userlist.component';

const routes: Routes = [
  {"path":"users",component:UserlistComponent},
  {"path":"form",component:FormComponent},
  {"path":"med-form",component:MedicineFormComponent},
  {"path":"login",component:LoginComponent},
  {"path":"medicare",component:MedicineComponent},
  {"path":"details/:id",component:UserdetailsComponent},
  {"path":"medDetails/:id",component:MedDetailsComponent},
  {"path":"edit/:id",component:EditUserComponent},
  {"path":"edit-med/:id",component:EditMedicineComponent},
  {"path":"dashboard",component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
