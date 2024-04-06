import { TestBed } from '@angular/core/testing';

import { JobSearchAppServiceService } from './job-search-app-service.service';

describe('JobSearchAppServiceService', () => {
  let service: JobSearchAppServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobSearchAppServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
