import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { createCustomElement } from '@angular/elements';
import { Project01Component } from './project01/project01.component';

@NgModule({
  declarations: [
    AppComponent,
    Project01Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [
    AppComponent,
    //Project01Component
  ]
})
export class AppModule {
  
  constructor(private injector: Injector) { }

  ngDoBootstrap(): void {

    const { injector } = this;
    
    const ngCustomElement = createCustomElement(AppComponent, { injector });

    customElements.define('app-project01', ngCustomElement);
  }
  
}
