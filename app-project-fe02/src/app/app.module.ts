import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { createCustomElement } from '@angular/elements';
import { Project01Component } from './project01/project01.component';
import { Page2Module } from './page2/page2.module';
import { Page2Component } from './page2/page2.component';
import { environment } from 'src/environments/environment';

let BOOTSTRAP_ARRAY  = [ AppComponent ];
let ENTRY_COMPONENTS = [];

if (environment.production) {
  BOOTSTRAP_ARRAY = [];
  ENTRY_COMPONENTS = [
    AppComponent,
    Page2Component,
    Project01Component
  ];
}

@NgModule({
  declarations: [
    AppComponent,
    Project01Component
  ],
  imports: [
    BrowserModule,
    Page2Module,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ 
    ...BOOTSTRAP_ARRAY  
  ],
  entryComponents: [
    ...ENTRY_COMPONENTS
  ]
})
export class AppModule {
  
  constructor(private injector: Injector) { }

  ngDoBootstrap(): void {
    if (environment.production) {
      console.log('> environment.production[ngDoBootstrap]')
      const { injector } = this;
      const ngCustomElement = createCustomElement(Page2Component, { injector });
      if (!customElements.get('app-project02')) {
         console.log('ngDoBootstrap->app-project02')
         customElements.define('app-project02', ngCustomElement);
      }
    }
  }
  
}
