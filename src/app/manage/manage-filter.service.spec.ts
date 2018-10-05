import { TestBed, inject } from '@angular/core/testing';

import { ManageFilterService } from './manage-filter.service';

describe('ManageFilterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManageFilterService]
    });
  });

  it('should be created', inject([ManageFilterService], (service: ManageFilterService) => {
    expect(service).toBeTruthy();
  }));
});
