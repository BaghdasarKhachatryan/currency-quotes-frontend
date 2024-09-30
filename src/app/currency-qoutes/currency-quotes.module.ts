import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyQuotesRoutingModule } from './currency-quotes-routing.module';
import { SharedModule } from '../shared/shared.module';

import { CurrencyQuotesComponent } from './currency-quotes.component';

@NgModule({
  declarations: [CurrencyQuotesComponent],
  imports: [CommonModule, CurrencyQuotesRoutingModule, SharedModule],
})
export class CurrencyQuotesModule {}
