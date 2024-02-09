import { TestBed } from '@angular/core/testing';

import { CreatemeetinService } from './createmeetin.service';

describe('CreatemeetinService', () => {
  let service: CreatemeetinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatemeetinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
