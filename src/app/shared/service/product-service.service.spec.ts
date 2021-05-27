import { TestBed } from '@angular/core/testing';

import { ProductServiceService } from './product-service.service';

describe('ProductServiceService', () => {
  let service: ProductServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
