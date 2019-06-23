import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IaTripService } from '../shared/services/ia-trip.service';
import { IaTripFormBuilderService } from '../shared/services/ia-trip/ia-trip-form-builder.service';

@Component({
  selector: 'app-ia-view-revised',
  templateUrl: './ia-view-revised.component.html',
  styleUrls: ['./ia-view-revised.component.scss']
})
export class IaViewRevisedComponent implements OnInit {

  newTrip: {} = {};
  displayedColumns: string[] = [];
  dateOptions: {} = {};
  roomValues: {};

  constructor(private tripService: IaTripService,
    private tripFormBuilder: IaTripFormBuilderService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    this.newTrip = this.tripService.newTrip;
    this.dateOptions = this.tripService.dateOptions;
    this.displayedColumns = this.tripService.displayedColumns;
    this.roomValues = this.tripFormBuilder.roomValues;

  }

  getCurrentDate(startDate: Date, dayIndex: number) {
    let currentDate = new Date(Date.now());
    currentDate.setDate(new Date(startDate).getDate() + dayIndex);
    currentDate.setMonth(new Date(startDate).getMonth());
    currentDate.setFullYear(new Date(startDate).getFullYear());
    return currentDate.toLocaleDateString("en-IN", this.dateOptions);
  }

  exportTrip(tripModel: FormData) {
    this.tripService.exportToJSON(tripModel);
  }

  editTrip(inputObject: {}) {
    this.tripService.editFlag = true;
    this.tripService.editTrip(inputObject);
    this.router.navigate(["../" + "new"], { relativeTo: this.route });
  }
}
