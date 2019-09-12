import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '',  loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  { path: 'request',  loadChildren: () => import('./modules/request/request.module').then(m => m.RequestModule) },
  { path: 'status',  loadChildren: () => import('./modules/status/status.module').then(m => m.StatusModule) },
  { path: 'validate',  loadChildren: () => import('./modules/validate/').then(m => m.ValidateModule) },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
