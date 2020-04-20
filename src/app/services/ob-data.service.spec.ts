import { TestBed } from '@angular/core/testing';

import { ObDataService } from './ob-data.service';

describe('ObDataService', () => {
  let service: ObDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
