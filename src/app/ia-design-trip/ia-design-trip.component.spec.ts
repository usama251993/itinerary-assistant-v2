import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IaDesignTripComponent } from './ia-design-trip.component';

describe('IaDesignTripComponent', () => {
  let component: IaDesignTripComponent;
  let fixture: ComponentFixture<IaDesignTripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IaDesignTripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IaDesignTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
