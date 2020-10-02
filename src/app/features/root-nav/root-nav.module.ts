import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { RootNavRoutingModule } from './root-nav-routing.module';
import { RootNavComponent } from './root-nav.component';


@NgModule({
  declarations: [RootNavComponent],
  imports: [SharedModule, RootNavRoutingModule]
})
export class RootNavModule {}
