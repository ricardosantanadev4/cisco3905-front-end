import { TestBed } from '@angular/core/testing';

import { RamaisResolver } from './ramais.resolver';

describe('RamaisResolver', () => {
  let resolver: RamaisResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(RamaisResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
