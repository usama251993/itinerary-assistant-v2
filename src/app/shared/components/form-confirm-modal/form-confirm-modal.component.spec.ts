import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormConfirmModalComponent } from './form-confirm-modal.component';

describe('FormConfirmModalComponent', () => {
  let component: FormConfirmModalComponent;
  let fixture: ComponentFixture<FormConfirmModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormConfirmModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormConfirmModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
