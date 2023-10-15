import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AdminBarcodesComponent} from "../admin-barcodes/admin-barcodes.component";


const routes: Routes = [
  {
    path: 'admin/barcodes',
    component: AdminBarcodesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
