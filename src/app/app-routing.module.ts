import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './shared/components';

import {HomeRoutingModule} from './home/home-routing.module';
import {DetailRoutingModule} from './detail/detail-routing.module';
import {AdminRoutingModule} from "./admin/admin-routing.module";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'barcodes',
    loadChildren: () => import('./barcodes/barcodes.module').then(m => m.BarcodesModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {}),
    HomeRoutingModule,
    DetailRoutingModule,
    AdminRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
