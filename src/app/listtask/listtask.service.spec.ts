import { TestBed } from '@angular/core/testing';

import { ListtaskService } from './listtask.service';

describe('ListtaskService', () => {
  let service: ListtaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListtaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
