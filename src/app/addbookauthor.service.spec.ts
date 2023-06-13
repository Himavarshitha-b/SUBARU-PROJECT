import { TestBed } from '@angular/core/testing';

import { AddbookauthorService } from './addbookauthor.service';

describe('AddbookauthorService', () => {
  let service: AddbookauthorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddbookauthorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
