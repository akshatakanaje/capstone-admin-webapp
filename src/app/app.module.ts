import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EditMedicineComponent,
    EditUserComponent,
    FormComponent,
    LoginComponent,
    MedDetailsComponent,
    MedicineFormComponent,
    MedicineComponent,
    UserdetailsComponent,
    UserlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
