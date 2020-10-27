import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrideAddComponent } from './bride-add/bride-add.component';
import { BrideInvoiceComponent } from './bride-invoice/bride-invoice.component';
import { BrideDetailComponent } from './bride-detail/bride-detail.component';
import { BrideEditComponent } from './bride-edit/bride-edit.component';
import { BrideListComponent } from './bride-list/bride-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'bride', pathMatch: 'full' },
  { path: 'bride', component: BrideListComponent},
  { path: 'add', component: BrideAddComponent },
  { path: 'update/:id', component: BrideEditComponent },
  { path: 'details/:id', component: BrideDetailComponent },
  { path: 'invoice/:id', component: BrideInvoiceComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
