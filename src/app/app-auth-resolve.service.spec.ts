import { TestBed } from '@angular/core/testing';

import { AppAuthResolveService } from './app-auth-resolve.service';

describe('AppAuthResolveService', () => {
  let service: AppAuthResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppAuthResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
