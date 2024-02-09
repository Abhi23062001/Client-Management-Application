import { TestBed } from '@angular/core/testing';

import { ListmeetingService } from './listmeeting.service';

describe('ListmeetingService', () => {
  let service: ListmeetingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListmeetingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
