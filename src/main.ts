import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { Project5AppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(Project5AppComponent);

