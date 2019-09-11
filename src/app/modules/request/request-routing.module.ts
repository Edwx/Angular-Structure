import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstRequestComponent } from './pages';

const routes: Routes = [
  { path: '', component: FirstRequestComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestRoutingModule { }
