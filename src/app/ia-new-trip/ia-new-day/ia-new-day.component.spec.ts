import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IaNewDayComponent } from './ia-new-day.component';

describe('IaNewDayComponent', () => {
  let component: IaNewDayComponent;
  let fixture: ComponentFixture<IaNewDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IaNewDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IaNewDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
