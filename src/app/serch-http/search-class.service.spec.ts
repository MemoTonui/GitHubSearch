import { TestBed } from '@angular/core/testing';

import { SearchClassService } from './search-class.service';

describe('SearchClassService', () => {
  let service: SearchClassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchClassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
