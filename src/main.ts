import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import '@ntstforms/ntst-form-renderer/dist/main.js';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import {FASTDesignSystemProvider, FASTRadio, FASTTextField} from '@microsoft/fast-components';

// tslint:disable-next-line:no-unused-expression
FASTDesignSystemProvider;
// tslint:disable-next-line:no-unused-expression
FASTRadio;
// tslint:disable-next-line:no-unused-expression
FASTTextField;


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
