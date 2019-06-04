import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IaEditTripComponent } from './ia-edit-trip.component';

describe('IaEditTripComponent', () => {
  let component: IaEditTripComponent;
  let fixture: ComponentFixture<IaEditTripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IaEditTripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IaEditTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
