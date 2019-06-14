import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormConfirmDialogComponent } from './form-confirm-dialog.component';

describe('FormConfirmDialogComponent', () => {
  let component: FormConfirmDialogComponent;
  let fixture: ComponentFixture<FormConfirmDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormConfirmDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
