import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { MicrofeService, CustomElementMicroFe } from './microfe.service';

const apps = [
  <CustomElementMicroFe>{
      elementId: "project01-container",
      tagName: "app-project01",
      nameApp: "Projeto 01",
      urlScript: "http://127.0.0.1:8081/main.js"
  },
  <CustomElementMicroFe>{
    elementId: "project02-container",
    tagName: "app-project02",
    nameApp: "Projeto 02",
    urlScript: "http://127.0.0.1:8082/main.js"
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  public title = 'app-shell';
  
  public toShow: SafeHtml = '';

  public items = apps;

  constructor(
    private sanitizer: DomSanitizer, 
    private route: ActivatedRoute,
    private microfe: MicrofeService) {
  }

  public clickMenu(item) {
    this.toShow = this.microfe.create(item);
    /*  
    this.toShow = this.sanitizer.bypassSecurityTrustHtml(
      `<div id="${item.id}">
        <${item.tagName}><div class="loader-05"></div></${item.tagName}>
      </div>`
    );
    */
  }
}

/**
   * 
   * /*"apps": [
      {
          "id":      "project01-container",
          "tagName": "app-project01",
          "url":     "http://localhost:8081/start"
      }
  ]
  */