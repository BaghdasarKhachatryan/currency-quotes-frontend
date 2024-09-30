import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrencyQuotesComponent } from './currency-quotes.component';

const routes: Routes = [
  {
    path: '',
    component: CurrencyQuotesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurrencyQuotesRoutingModule {}
