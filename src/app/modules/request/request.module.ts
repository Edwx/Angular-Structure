import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestRoutingModule } from './request-routing.module';
import { FirstRequestComponent } from './pages';


@NgModule({
  declarations: [FirstRequestComponent],
  imports: [
    CommonModule,
    RequestRoutingModule
  ],
  exports: [FirstRequestComponent]
})
export class RequestModule { }
