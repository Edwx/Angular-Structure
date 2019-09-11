import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValidateRoutingModule } from './validate-routing.module';
import { FirstValidateComponent } from './pages';


@NgModule({
  declarations: [FirstValidateComponent],
  imports: [
    CommonModule,
    ValidateRoutingModule
  ],
  exports: [FirstValidateComponent]
})
export class ValidateModule { }
