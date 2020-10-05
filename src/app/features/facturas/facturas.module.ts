import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacturasRoutingModule } from './facturas-routing.module';
import { FacturasComponent } from './facturas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [FacturasComponent],
  imports: [
    CommonModule,
    FacturasRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,

    FormsModule, ReactiveFormsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatIconModule
  ]
})
export class FacturasModule { }
