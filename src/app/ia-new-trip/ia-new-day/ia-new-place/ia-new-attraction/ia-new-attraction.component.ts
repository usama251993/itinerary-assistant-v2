import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { IaTripFormBuilderService } from 'src/app/shared/services/ia-trip/ia-trip-form-builder.service';

@Component({
  selector: 'app-ia-new-attraction',
  templateUrl: './ia-new-attraction.component.html',
  styleUrls: ['./ia-new-attraction.component.scss']
})
export class IaNewAttractionComponent implements OnInit {

  @Input("attractionFormGroup") attractionFormGroup: FormGroup;
  @Input("attractionIndex") attractionIndex: { day: number, place: number, attraction: number };

  constructor(private tripFormBuilder: IaTripFormBuilderService) { }

  ngOnInit(): void { }

  deleteAttraction(indexObject: { day: number, place: number, attraction: number }): void {
    this.tripFormBuilder.deleteAttraction(indexObject.day, indexObject.place, indexObject.attraction);
  }

  clearInput(control: FormControl) {
    control.setValue("");
  }

}
