import { TestBed } from '@angular/core/testing';

import { CoursiersService } from './coursiers.service';

describe('CoursiersService', () => {
  let service: CoursiersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoursiersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
