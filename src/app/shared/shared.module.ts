import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';

import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse, HttpClientModule } from '@angular/common/http';

import {MatDialogModule} from '@angular/material/dialog';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { RouterModule } from '@angular/router';
import { ModalClienteComponent } from './modal-cliente/modal-cliente.component';
import { MatDialogRef } from "@angular/material/dialog";

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [ModalClienteComponent],
  providers:[HttpClientModule],
  imports: [
    // vendor
    CommonModule,
    RouterModule,

    // material
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    MatGridListModule,
    MatFormFieldModule,
    MatRadioModule,
    MatDatepickerModule,
    MatDialogRef,
    FormsModule, ReactiveFormsModule,


    //http
    HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse,

    MatInputModule
  ],
  exports: [
    // vendor
    CommonModule,
    RouterModule,

    // material
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatDialogModule,
    MatGridListModule,
    MatFormFieldModule,
    MatRadioModule,
    MatDatepickerModule,
    MatDialogRef,
        //http
    HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse,
    FormsModule, ReactiveFormsModule,

    MatInputModule,

    // local
    ModalClienteComponent
    //TableListComponent
  ]
})
export class SharedModule {}
