import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { StatusService } from './http';

@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [ ],
  providers: [
    StatusService
  ]
})
export class CoreModule { }
