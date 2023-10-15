import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {BarcodesCheckStatusComponent} from "../barcodes-check-status/barcodes-check-status.component";
import {BarcodesAddItemsComponent} from "../barcodes-add-items/barcodes-add-items.component";
import {BarcodesRemoveItemsComponent} from "../barcodes-remove-items/barcodes-remove-items.component";


const routes: Routes = [
  {
    path: '',
    redirectTo: 'check-status',
    pathMatch: "full"
  },
  {
    path: 'check-status',
    component: BarcodesCheckStatusComponent
  },
  {
    path: 'add-items',
    component: BarcodesAddItemsComponent
  },
  {
    path: 'remove-items',
    component: BarcodesRemoveItemsComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class BarcodesRoutingModule { }
