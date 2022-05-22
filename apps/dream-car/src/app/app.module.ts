import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from "./app.rooting.module";
import {AuthService} from "@dream-car/services";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule,],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
