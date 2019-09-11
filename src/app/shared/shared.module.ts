import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollapseButtonComponent, FavoriteButtonComponent, LoaderComponent } from './components';
import { AuthDirective } from './directives';
import { FooterComponent, HeaderComponent } from './layout';
import { Capitalize, Safe } from './pipes';

@NgModule({
  declarations: [
      CollapseButtonComponent, FavoriteButtonComponent, LoaderComponent,
      AuthDirective,
      FooterComponent, HeaderComponent,
      Capitalize, Safe
    ],
  imports: [
    CommonModule
  ],
  exports: [
      CollapseButtonComponent, FavoriteButtonComponent, LoaderComponent,
      AuthDirective,
      FooterComponent, HeaderComponent,
      Capitalize, Safe
    ]
})
export class SharedModule { }
