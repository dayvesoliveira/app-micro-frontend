import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Page2RoutingModule } from './page2-routing.module';
import { GridComponent } from './grid/grid.component';
import { DetailComponent } from './detail/detail.component';
import { RouterModule } from '@angular/router';
import { Page2Component } from './page2.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    Page2RoutingModule
  ],
  declarations: [
    GridComponent, 
    DetailComponent, 
    Page2Component
  ]
})
export class Page2Module { }
