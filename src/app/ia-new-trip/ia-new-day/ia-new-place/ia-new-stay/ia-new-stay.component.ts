import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { IaTripFormBuilderService } from 'src/app/shared/services/ia-trip/ia-trip-form-builder.service';

@Component({
  selector: 'app-ia-new-stay',
  templateUrl: './ia-new-stay.component.html',
  styleUrls: ['./ia-new-stay.component.scss']
})
export class IaNewStayComponent implements OnInit {

  @Input("stayFormGroup") stayFormGroup: FormGroup;
  @Input("stayIndex") stayIndex: { day: number, place: number, stay: number };

  constructor(private tripFormBuilder: IaTripFormBuilderService) { }

  ngOnInit(): void { }

  clearInput(control: FormControl): void {
    control.setValue("");
  }

  addNewContact(indexObject: { day: number, place: number, stay: number }): void {
    this.tripFormBuilder.addNewContact(indexObject.day, indexObject.place, indexObject.stay);
  }

  addNewRoom(indexObject: { day: number, place: number, stay: number }): void {
    this.tripFormBuilder.addNewRoom(indexObject.day, indexObject.place, indexObject.stay);
  }

  deleteStay(indexObject: { day: number, place: number, stay: number }): void {
    this.tripFormBuilder.deleteStay(indexObject.day, indexObject.place, indexObject.stay);
  }

  deleteContact(indexObject: { day: number, place: number, stay: number }, contactIndex: number): void {
    this.tripFormBuilder.deleteContact(indexObject.day, indexObject.place, indexObject.stay, contactIndex);
  }

}
