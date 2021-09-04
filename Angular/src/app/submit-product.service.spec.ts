import { TestBed } from '@angular/core/testing';

import { SubmitProductService } from './submit-product.service';

describe('SubmitProductService', () => {
  let service: SubmitProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubmitProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
