import { TestBed } from '@angular/core/testing';

import { IaTripFormBuilderService } from './ia-trip-form-builder.service';

describe('IaTripFormBuilderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IaTripFormBuilderService = TestBed.get(IaTripFormBuilderService);
    expect(service).toBeTruthy();
  });
});
