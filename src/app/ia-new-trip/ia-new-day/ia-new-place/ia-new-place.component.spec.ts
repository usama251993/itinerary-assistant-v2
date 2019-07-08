import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IaNewPlaceComponent } from './ia-new-place.component';

describe('IaNewPlaceComponent', () => {
  let component: IaNewPlaceComponent;
  let fixture: ComponentFixture<IaNewPlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IaNewPlaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IaNewPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
