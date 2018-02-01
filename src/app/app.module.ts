import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {MaterialsComponent} from './materials/materials.component';
import {MaterialDetailComponent} from './material-detail/material-detail.component';
import {MaterialService} from './material.service';
import {MessagesComponent} from './messages/messages.component';
import {MessageService} from './message.service';

@NgModule({
  declarations: [
    AppComponent,
    MaterialsComponent,
    MaterialDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [MaterialService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
