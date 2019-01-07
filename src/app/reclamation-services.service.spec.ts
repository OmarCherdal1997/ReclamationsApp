import { TestBed } from '@angular/core/testing';

import { ReclamationServicesService } from './reclamation-services.service';

describe('ReclamationServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReclamationServicesService = TestBed.get(ReclamationServicesService);
    expect(service).toBeTruthy();
  });
});
