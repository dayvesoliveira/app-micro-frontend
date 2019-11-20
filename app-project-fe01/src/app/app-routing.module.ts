import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Project01Component } from './project01/project01.component';


const routes: Routes = [
  {path:'/project01', component: Project01Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
