import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

import { IaTripService } from '../shared/services/ia-trip.service';

export interface sourceDetails {
  source: string;
  startDate: string;
}

@Component({
  selector: 'app-ia-design-trip',
  templateUrl: './ia-design-trip.component.html',
  styleUrls: ['./ia-design-trip.component.scss']
})

export class IaDesignTripComponent implements OnInit {

  emptyRoomData = [{ type: "", cost: 0 }];
  displayedColumns: string[] = ["type", "cost"];
  sourceDetails: sourceDetails = { source: "", startDate: "" };
  designForm: FormGroup = this.formBuilder.group({});
  daysArray: FormArray = this.formBuilder.array([]);


  constructor(private tripService: IaTripService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.populateSourceDetails(this.tripService.tripInitData, this.sourceDetails);
    this.designForm = this.formBuilder.group({
      days: this.daysArray
    })
  }

  get days() {
    return this.designForm.get("days") as FormArray;
  }

  addNewDay() {
    this.days.push(this.formBuilder.group({

    }));
  }

  deleteRow(index: number) {
    this.days.removeAt(index);
  }

  populateSourceDetails(tripInitData: FormData, sourceDetails: sourceDetails) {
    if (tripInitData === undefined) {
      tripInitData = new FormData();
      tripInitData["source"] = "Mumbai";
      tripInitData["startDate"] = new Date();
    }
    sourceDetails.source = tripInitData["source"];
    sourceDetails.startDate = (tripInitData["startDate"] as Date).toDateString();
  }

}


