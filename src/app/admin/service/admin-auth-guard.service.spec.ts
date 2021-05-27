import { TestBed } from '@angular/core/testing';

import { AdminAuthGuard } from './admin-auth-guard.service';

describe('AdminAuthGuard', () => {
  let service: AdminAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminAuthGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
