import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IaNewAttractionComponent } from './ia-new-attraction.component';

describe('IaNewAttractionComponent', () => {
  let component: IaNewAttractionComponent;
  let fixture: ComponentFixture<IaNewAttractionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IaNewAttractionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IaNewAttractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
