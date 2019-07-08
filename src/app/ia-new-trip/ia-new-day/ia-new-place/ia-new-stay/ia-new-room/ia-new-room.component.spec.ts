import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IaNewRoomComponent } from './ia-new-room.component';

describe('IaNewRoomComponent', () => {
  let component: IaNewRoomComponent;
  let fixture: ComponentFixture<IaNewRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IaNewRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IaNewRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
