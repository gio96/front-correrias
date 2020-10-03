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

import {Cliente} from './entities/Cliente';


import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  providers:[HttpClientModule],
  imports: [
    // vendor
    CommonModule,
    RouterModule,

    // material
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse
  ],
  exports: [
    // vendor
    CommonModule,
    RouterModule,

    // material
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse

    // local
    //TableListComponent
  ]
})
export class SharedModule {}
