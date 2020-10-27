import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrideCreateComponent } from './bride/bride-create/bride-create.component';
import { BrideEditComponent } from './bride/bride-edit/bride-edit.component';
import { BrideDetailComponent } from './bride/bride-detail/bride-detail.component';
import { BrideListComponent } from './bride/bride-list/bride-list.component';
import { DateRangeComponent } from './date-range/date-range.component';


import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { InvoiceComponent } from './invoice/invoice.component';



@NgModule({
  declarations: [
    AppComponent,
    BrideCreateComponent,
    BrideEditComponent,
    BrideDetailComponent,
    BrideListComponent,
    DateRangeComponent,
    InvoiceComponent,
    MatTableModule
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
