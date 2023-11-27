import { TestBed } from '@angular/core/testing';

import { RamaisService } from './ramais.service';

describe('RamaisService', () => {
  let service: RamaisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RamaisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
