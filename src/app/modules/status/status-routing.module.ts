import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstStatusComponent } from './pages';

const routes: Routes = [
  { path: '', component: FirstStatusComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatusRoutingModule { }
