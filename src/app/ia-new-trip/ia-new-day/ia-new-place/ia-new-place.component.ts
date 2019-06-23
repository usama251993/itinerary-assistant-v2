import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { IaTripFormBuilderService } from 'src/app/shared/services/ia-trip/ia-trip-form-builder.service';

@Component({
  selector: 'app-ia-new-place',
  templateUrl: './ia-new-place.component.html',
  styleUrls: ['./ia-new-place.component.scss']
})
export class IaNewPlaceComponent implements OnInit {

  @Input("placeFormGroup") placeFormGroup: FormGroup;
  @Input("placeIndex") placeIndex: { day: number, place: number };

  constructor(private tripFormBuilder: IaTripFormBuilderService) { }

  ngOnInit(): void { }

  deletePlace(indexObject: { day: number, place: number }): void {
    this.tripFormBuilder.deletePlace(indexObject.day, indexObject.place);
  }

  addNewAttraction(indexObject: { day: number, place: number }): void {
    this.tripFormBuilder.addNewAttraction(indexObject.day, indexObject.place);
  }

  addNewStay(indexObject: { day: number, place: number }): void {
    this.tripFormBuilder.addNewStay(indexObject.day, indexObject.place);
  }

  clearInput(control: FormControl): void {
    control.setValue("");
  }
}
