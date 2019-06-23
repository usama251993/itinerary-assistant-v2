import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IaLoadTripFormComponent } from './ia-load-trip-form.component';

describe('IaLoadTripFormComponent', () => {
  let component: IaLoadTripFormComponent;
  let fixture: ComponentFixture<IaLoadTripFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IaLoadTripFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IaLoadTripFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
