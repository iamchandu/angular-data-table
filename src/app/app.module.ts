import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DatatableComponent } from './datatable/datatable.component';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { DatatableRefComponent } from './datatable-ref/datatable-ref.component';

@NgModule({
  declarations: [
    AppComponent,
    DatatableComponent,
    DatatableRefComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
