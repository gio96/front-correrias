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

import {Cliente} from './entities/Cliente';


import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    // vendor
    CommonModule,
    RouterModule,

    // material
    MatCardModule,
    MatButtonModule,
    MatTableModule
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
    MatTableModule

    // local
    //TableListComponent
  ]
})
export class SharedModule {}
