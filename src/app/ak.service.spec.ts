import { TestBed } from '@angular/core/testing';

import { AkService } from './ak.service';

describe('AkService', () => {
  let service: AkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
