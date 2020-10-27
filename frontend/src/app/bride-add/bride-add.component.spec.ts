import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrideAddComponent } from './bride-add.component';

describe('BrideAddComponent', () => {
  let component: BrideAddComponent;
  let fixture: ComponentFixture<BrideAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrideAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrideAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
