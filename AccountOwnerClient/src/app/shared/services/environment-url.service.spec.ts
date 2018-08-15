import { TestBed, inject } from '@angular/core/testing';

import { EnvironmentUrlService } from './environment-url.service';

describe('EnvironmentUrlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnvironmentUrlService]
    });
  });

  it('should be created', inject([EnvironmentUrlService], (service: EnvironmentUrlService) => {
    expect(service).toBeTruthy();
  }));
});
