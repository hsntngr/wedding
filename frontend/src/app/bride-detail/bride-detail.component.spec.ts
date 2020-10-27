import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrideDetailComponent } from './bride-detail.component';

describe('BrideDetailComponent', () => {
  let component: BrideDetailComponent;
  let fixture: ComponentFixture<BrideDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrideDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrideDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
