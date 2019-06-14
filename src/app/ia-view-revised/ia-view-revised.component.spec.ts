import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IaViewRevisedComponent } from './ia-view-revised.component';

describe('IaViewRevisedComponent', () => {
  let component: IaViewRevisedComponent;
  let fixture: ComponentFixture<IaViewRevisedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IaViewRevisedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IaViewRevisedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
