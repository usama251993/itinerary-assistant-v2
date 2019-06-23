import { TestBed } from '@angular/core/testing';

import { IaNewTripService } from './ia-new-trip.service';

describe('IaNewTripService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IaNewTripService = TestBed.get(IaNewTripService);
    expect(service).toBeTruthy();
  });
});
