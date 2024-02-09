import { TestBed } from '@angular/core/testing';

import { ListclientService } from './listclient.service';

describe('ListclientService', () => {
  let service: ListclientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListclientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
