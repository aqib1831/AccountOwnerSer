import { TestBed, inject } from '@angular/core/testing';

import { RepositoryServiceService } from './repository-service.service';

describe('RepositoryServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RepositoryServiceService]
    });
  });

  it('should be created', inject([RepositoryServiceService], (service: RepositoryServiceService) => {
    expect(service).toBeTruthy();
  }));
});
