import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrideInvoiceComponent } from './bride-invoice.component';

describe('BrideInvoiceComponent', () => {
  let component: BrideInvoiceComponent;
  let fixture: ComponentFixture<BrideInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrideInvoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrideInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
