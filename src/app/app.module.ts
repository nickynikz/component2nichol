import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstbuttonComponent } from './firstbutton/firstbutton.component';
import { FinalbuttonComponent } from './finalbutton/finalbutton.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstbuttonComponent,
    FinalbuttonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
