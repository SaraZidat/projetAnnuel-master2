import { TestBed } from '@angular/core/testing';

import { VeterinaireService } from './veterinaire.service';

describe('VeterinaireService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VeterinaireService = TestBed.get(VeterinaireService);
    expect(service).toBeTruthy();
  });
});
