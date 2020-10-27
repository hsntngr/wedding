import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrideEditComponent } from './bride-edit.component';

describe('BrideEditComponent', () => {
  let component: BrideEditComponent;
  let fixture: ComponentFixture<BrideEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrideEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrideEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
