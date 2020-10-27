import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule  } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from '../app/shared/shared.module'

import { BrideAddComponent } from './bride-add/bride-add.component';
import { BrideEditComponent } from './bride-edit/bride-edit.component';
import { BrideListComponent } from './bride-list/bride-list.component';
import { BrideInvoiceComponent } from './bride-invoice/bride-invoice.component';
import { BrideDetailComponent } from './bride-detail/bride-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BrideAddComponent,
    BrideEditComponent,
    BrideListComponent,
    BrideInvoiceComponent,
    BrideDetailComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
