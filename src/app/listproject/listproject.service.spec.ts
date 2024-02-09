import { TestBed } from '@angular/core/testing';

import { ListprojectService } from './listproject.service';

describe('ListprojectService', () => {
  let service: ListprojectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListprojectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
