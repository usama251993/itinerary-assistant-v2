import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IaNewTripComponent } from './ia-new-trip.component';

describe('IaNewTripComponent', () => {
  let component: IaNewTripComponent;
  let fixture: ComponentFixture<IaNewTripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IaNewTripComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IaNewTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
