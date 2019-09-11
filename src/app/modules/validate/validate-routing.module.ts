import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstValidateComponent } from './pages';

const routes: Routes = [
  { path: '', component: FirstValidateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ValidateRoutingModule { }
