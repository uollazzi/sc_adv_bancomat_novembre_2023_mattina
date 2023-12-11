import { TestBed } from '@angular/core/testing';

import { BancomatService } from './bancomat.service';

describe('BancomatService', () => {
  let service: BancomatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BancomatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
