import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RootNavComponent } from './root-nav.component';


const routes: Routes = [{ path: '', component: RootNavComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RootNavRoutingModule {}
