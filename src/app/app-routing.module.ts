import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'clientes'
  },
  { path: 'clientes', loadChildren: () => import('./features/cliente/cliente.module').then(m => m.ClienteModule) },
  { path: 'facturas', loadChildren: () => import('./features/facturas/facturas.module').then(m => m.FacturasModule) },{
    path: '**',
    redirectTo: 'clientes'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
