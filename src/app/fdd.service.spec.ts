import { TestBed } from '@angular/core/testing';

import { FddService } from './fdd.service';

describe('FddService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FddService = TestBed.get(FddService);
    expect(service).toBeTruthy();
  });
});
