import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrideListComponent } from './bride/bride-list/bride-list.component';
import { BrideCreateComponent } from './bride/bride-create/bride-create.component';
import { BrideEditComponent } from './bride/bride-edit/bride-edit.component';
import { BrideDetailComponent } from './bride/bride-detail/bride-detail.component';
import { DateRangeComponent } from './date-range/date-range.component';
import { InvoiceComponent } from './invoice/invoice.component';


const routes: Routes = [
  { path: '', redirectTo: 'bride', pathMatch: 'full' },
  { path: 'bride', component: BrideListComponent},
  { path: 'add', component: BrideCreateComponent },
  { path: 'update/:id', component: BrideEditComponent },
  { path: 'details/:id', component: BrideDetailComponent },
  { path: 'dets', component: DateRangeComponent },
  { path: 'invoice/:id', component: InvoiceComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
