import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarcodesAddItemsComponent } from '../barcodes-add-items/barcodes-add-items.component';
import { BarcodesRemoveItemsComponent } from '../barcodes-remove-items/barcodes-remove-items.component';
import { BarcodesCheckStatusComponent } from '../barcodes-check-status/barcodes-check-status.component';
import { BarcodesRoutingModule } from './barcodes-routing.module';
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
  declarations: [
    BarcodesAddItemsComponent,
    BarcodesRemoveItemsComponent,
    BarcodesCheckStatusComponent
  ],
  imports: [
    CommonModule,
    BarcodesRoutingModule,
    TranslateModule
  ]
})
export class BarcodesModule { }
