import { TestBed } from '@angular/core/testing';

import { BrideService } from './bride.service';

describe('EmployeeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BrideService = TestBed.get(BrideService);
    expect(service).toBeTruthy();
  });
});
