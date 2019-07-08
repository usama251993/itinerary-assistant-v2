import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IaOverviewComponent } from './ia-overview.component';

describe('IaOverviewComponent', () => {
  let component: IaOverviewComponent;
  let fixture: ComponentFixture<IaOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IaOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IaOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
