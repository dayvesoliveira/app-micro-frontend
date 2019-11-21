import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Project01Component } from './project01/project01.component';
import { Page2Component } from './page2/page2.component';


const routes: Routes = [
  { path:'projeto', component: Project01Component },
  { path:'page2', component: Page2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
