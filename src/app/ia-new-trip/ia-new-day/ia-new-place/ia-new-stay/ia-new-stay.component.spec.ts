import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IaNewStayComponent } from './ia-new-stay.component';

describe('IaNewStayComponent', () => {
  let component: IaNewStayComponent;
  let fixture: ComponentFixture<IaNewStayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IaNewStayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IaNewStayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
