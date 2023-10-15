import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminBarcodesComponent } from '../admin-barcodes/admin-barcodes.component';
import { AdminRoutingModule } from './admin-routing.module';



@NgModule({
  declarations: [
    AdminBarcodesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
