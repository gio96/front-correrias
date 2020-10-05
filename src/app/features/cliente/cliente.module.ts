import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteComponent } from './cliente.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { ModalClienteComponent } from 'src/app/shared/modal-cliente/modal-cliente.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';




@NgModule({
  declarations: [ClienteComponent, ModalClienteComponent],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule, ReactiveFormsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatIconModule
  ],
  entryComponents: [ModalClienteComponent]
})
export class ClienteModule { }
