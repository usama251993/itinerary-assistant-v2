import { TestBed } from '@angular/core/testing';

import { IaNavigationService } from './ia-navigation.service';

describe('IaNavigationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IaNavigationService = TestBed.get(IaNavigationService);
    expect(service).toBeTruthy();
  });
});
