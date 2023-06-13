import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddMedicinesComponent } from './add-medicines/add-medicines.component';
import { UpdateMedicinesComponent } from './update-medicines/update-medicines.component';
import { ViewMedicinesComponent } from './view-medicines/view-medicines.component';
import { MedicinesComponent } from './medicines.component';
import { provideRoutes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MedicinesService } from 'src/app/services/medicines.service';



@NgModule({
  declarations: [
    MedicinesComponent,
    AddMedicinesComponent,
    UpdateMedicinesComponent,
    ViewMedicinesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers:[MedicinesService]
})
export class MedicinesModule { }
