import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppModel } from './app.model';
import { AppService } from './app.service';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    AppModel,
    AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
