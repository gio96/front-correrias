import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrearClienteRoutingModule } from './crear-cliente-routing.module';
import { CrearClienteComponent } from './crear-cliente.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [CrearClienteComponent],
  imports: [
    CommonModule,
    CrearClienteRoutingModule,
    MatGridListModule,
    FormsModule, ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class CrearClienteModule { }
