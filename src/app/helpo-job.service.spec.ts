import { TestBed } from '@angular/core/testing';

import { HelpoJobService } from './helpo-job.service';

describe('HelpoJobService', () => {
  let service: HelpoJobService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelpoJobService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
