import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrearFacturaRoutingModule } from './crear-factura-routing.module';
import { CrearFacturaComponent } from './crear-factura.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  declarations: [CrearFacturaComponent],
  imports: [
    CommonModule,
    CrearFacturaRoutingModule,
    MatGridListModule,
    FormsModule, ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class CrearFacturaModule { }
