import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatStepper } from '@angular/material';
import { IaTripFormBuilderService } from 'src/app/shared/services/ia-trip/ia-trip-form-builder.service';

@Component({
  selector: 'app-ia-new-day',
  templateUrl: './ia-new-day.component.html',
  styleUrls: ['./ia-new-day.component.scss']
})
export class IaNewDayComponent implements OnInit {

  @Input("dayFormGroup") dayFormGroup: FormGroup;
  @Input("dayIndex") dayIndex: { day: number };

  constructor(private tripFormBuilder: IaTripFormBuilderService) { }

  ngOnInit(): void { }

  addNewPlace(dayIndex: number, stepper: MatStepper): void {
    this.tripFormBuilder.addNewPlace(dayIndex, stepper);
  }

}
