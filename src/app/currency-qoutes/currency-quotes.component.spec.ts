import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyQuotesComponent } from './currency-quotes.component';

describe('CurrencyQuotesComponent', () => {
  let component: CurrencyQuotesComponent;
  let fixture: ComponentFixture<CurrencyQuotesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrencyQuotesComponent]
    });
    fixture = TestBed.createComponent(CurrencyQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
