import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteComponent } from './cliente.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { ModalClienteComponent } from 'src/app/shared/modal-cliente/modal-cliente.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [ClienteComponent, ModalClienteComponent],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule
  ],
  entryComponents: [ModalClienteComponent]
})
export class ClienteModule { }
