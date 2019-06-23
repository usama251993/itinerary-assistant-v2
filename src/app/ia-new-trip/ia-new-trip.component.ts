import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatStepper } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';

import { IaTripFormBuilderService } from '../shared/services/ia-trip/ia-trip-form-builder.service';
import { IaTripService } from '../shared/services/ia-trip.service';

@Component({
  selector: 'app-ia-trip',
  templateUrl: './ia-new-trip.component.html',
  styleUrls: ['./ia-new-trip.component.scss'],
  providers: [IaTripFormBuilderService]
})
export class IaNewTripComponent implements OnInit {

  tripForm: FormGroup;
  newTrip: {} = { tripStart: { sourceCity: "", startDate: new Date(Date.now()) }, days: [] };
  today: Date;
  dateOptions: {} = {};

  editFlag: boolean = false;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private tripFormBuilder: IaTripFormBuilderService,
    private tripService: IaTripService) { }

  ngOnInit(): void {
    this.editFlag = this.tripService.editFlag;
    this.tripForm = this.tripFormBuilder.tripForm;
    this.today = this.tripFormBuilder.today;
    this.dateOptions = this.tripService.dateOptions;

    if (!this.editFlag) { } else {
      this.tripService.customSetValue(this.tripForm, this.tripService.newTrip as FormData);
    }
  }

  addNewDay(stepper: MatStepper): void {
    this.tripFormBuilder.addNewDay(stepper);
  }

  getCurrentDate(startDate: Date, dayIndex: number) {
    let formDate = new Date(startDate);
    let currentDate = new Date(Date.now());
    currentDate.setDate(formDate.getDate() + dayIndex);
    return currentDate.toLocaleDateString("en-IN", this.dateOptions);
  }

  deleteDay(dayIndex: { day: number }): void {
    this.tripFormBuilder.deleteDay(dayIndex.day);
  }

  clearInput(control: FormControl): void {
    control.setValue("");
  }

  formSubmit(): void {
    this.tripService.editFlag = false;
    this.tripService.newTrip = this.newTrip;
    this.tripService.createNewTrip(this.cleanForm(this.tripForm.value));
    console.log(this.tripForm.value);

    // this.router.navigate(["../" + "view"], { relativeTo: this.route });
  }

  cleanForm(formData: FormData) {
    Object.keys(formData).forEach((key) => {
      if (formData[key] !== null && typeof (formData[key]) === "object") {
        this.cleanForm(formData[key]);
      } else {
        if (typeof (formData[key]) === "string") {
          formData[key] = formData[key].trim();
        }
      }
    });
    return formData;
  }

}
