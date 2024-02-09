import { TestBed } from '@angular/core/testing';

import { SharelogindetailsService } from './sharelogindetails.service';

describe('SharelogindetailsService', () => {
  let service: SharelogindetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharelogindetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
