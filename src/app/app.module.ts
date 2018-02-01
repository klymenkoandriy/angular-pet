import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {MaterialsComponent} from './materials/materials.component';
import {MaterialDetailComponent} from './material-detail/material-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MaterialsComponent,
    MaterialDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
