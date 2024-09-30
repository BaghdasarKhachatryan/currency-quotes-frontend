import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'currency-quotes',
    loadChildren: () =>
      import('./currency-qoutes/currency-quotes.module').then(
        (m) => m.CurrencyQuotesModule
      ),
  },
  {
    path: '',
    redirectTo: '/currency-quotes',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
