import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { Ng2LabAppComponent, environment } from './demo-app';

if (environment.production) {
  enableProdMode();
}

bootstrap(Ng2LabAppComponent);
