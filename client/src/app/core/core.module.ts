import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { HttpInterceptorService, AppConfigService } from './services';

const appInitialerFn = (appConfig: AppConfigService) => {
  return appConfig.appInitializerFn();
};

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers : [ { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true },
    { provide: APP_INITIALIZER, useFactory: appInitialerFn, multi: true, deps: [AppConfigService] }]
})
export class CoreModule { }
