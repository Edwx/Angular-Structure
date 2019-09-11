import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatusRoutingModule } from './status-routing.module';
import { FirstStatusComponent } from './pages';


@NgModule({
  declarations: [FirstStatusComponent],
  imports: [
    CommonModule,
    StatusRoutingModule
  ],
  exports: [FirstStatusComponent]
})
export class StatusModule { }
