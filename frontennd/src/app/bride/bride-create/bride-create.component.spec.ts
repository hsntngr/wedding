import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrideCreateComponent } from './bride-create.component';

describe('BrideCreateComponent', () => {
  let component: BrideCreateComponent;
  let fixture: ComponentFixture<BrideCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrideCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrideCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
