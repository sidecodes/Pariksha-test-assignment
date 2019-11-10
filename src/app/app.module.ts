import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, BaseRequestOptions } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { LoginModule } from './views/login/login.module';
import { CoreModulesModule } from './core-modules/coreModules.module';
import { APPLICATION_SERVICES } from './config/app-module.config';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    CoreModulesModule,
    routing
  ],
  providers: [
    BaseRequestOptions,
    ...APPLICATION_SERVICES
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
