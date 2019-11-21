import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

export interface CustomElementMicroFe {
    elementId: string;
    tagName: string;
    nameApp: string;
    urlScript: string;
}

@Injectable({
  providedIn: 'root'
})
export class MicrofeService {

  private _scriptCache: any = {};

  constructor(private sanitizer: DomSanitizer) {
  }

  public create(item: CustomElementMicroFe): SafeHtml {

    if (item.urlScript) {
      this.loadScript(item.urlScript);
    }

    return this.sanitizer.bypassSecurityTrustHtml(
      `<div id="${item.elementId}">
        <${item.tagName}><div class="loader-05"></div></${item.tagName}>
      </div>`
    )
  }

  loadScript(name: string) {
    return new Promise((resolve, reject) => {
      
      if ( this.isScriptLoaded() ) {
        resolve({script: name, loaded: true, status: 'Already Loaded'});
      } else {
        
        if (!this._scriptCache[name]) {
          this._scriptCache[name] = {};
        }

        this._scriptCache[name].src = name;

        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = name;
        
        if ( this.hasPropertyReadyState(script) ) {

          script['onreadystatechange'] = () => {

            if ( this.isReadyStateComplete(script) ) {
              script['onreadystatechange'] = null;
              this._scriptCache[name].loaded = true;

              resolve({script: name, loaded: true, status: 'Loaded'});
            }

          }

        } else {
          script.onload = () => {
            this._scriptCache[name].loaded = true;
            resolve({script: name, loaded: true, status: 'Loaded'});
          };
        }
        
        script.onerror = (error: any) => resolve({script: name, loaded: false, status: 'Loaded'});
        
        document.getElementsByTagName('head')[0].appendChild(script);
      }
    });
  }

  private hasPropertyReadyState(script): boolean {
    return script['readyState'] ? true : false;
  }

  private isReadyStateComplete(script): boolean {
    return script['readyState'] === 'loaded' || script['readyState'] === 'complete' ? true : false;
  }

  private isScriptLoaded(){
    return this._scriptCache[name] && this._scriptCache[name]['loaded'];
  }

}
