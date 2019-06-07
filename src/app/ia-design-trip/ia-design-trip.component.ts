import { Component, OnInit } from '@angular/core';
import { IaTripService } from '../shared/services/ia-trip.service';
import { FormBuilder } from '@angular/forms';

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

  constructor(private tripService: IaTripService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    if (this.tripService.tripInitData === undefined) {
      this.tripService.tripInitData = new FormData();
      this.tripService.tripInitData["source"] = "Mumbai";
      this.tripService.tripInitData["startDate"] = new Date();
    }
    this.sourceDetails.source = this.tripService.tripInitData["source"];
    this.sourceDetails.startDate = (this.tripService.tripInitData["startDate"] as Date).toDateString();

  }

}


