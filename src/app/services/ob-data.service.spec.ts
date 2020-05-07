import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { ObDataService } from './ob-data.service';

describe('ObDataService', () => {
  let service: ObDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ObDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
