import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearFacturaComponent } from './crear-factura.component';

const routes: Routes = [{ path: '', component: CrearFacturaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrearFacturaRoutingModule { }
