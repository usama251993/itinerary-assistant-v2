import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

import { IaTripModel } from '../shared/models/ia-trip.model';
import { IaTripService } from '../shared/services/ia-trip.service';
import { IaTripFormBuilderService } from '../shared/services/ia-trip/ia-trip-form-builder.service';
import { Router, ActivatedRoute } from '@angular/router';

export interface HotelRoom {
  roomType: string;
  roomCost: number;
}

@Component({
  selector: 'app-ia-view-trip',
  templateUrl: './ia-view-trip.component.html',
  styleUrls: ['./ia-view-trip.component.scss']
})

export class IaViewTripComponent implements OnInit {

  newTrip: {} = {};
  displayedColumns: string[] = [];
  dateOptions: {} = {};
  roomValues: {};

  constructor(private tripService: IaTripService,
    private tripFormBuilder: IaTripFormBuilderService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    // this.newTrip = { tripStart: { sourceCity: "Mumbai", startDate: "2019-12-20T18:30:00.000Z" }, days: [{ places: [{ name: "Guwahati", attractions: [{ name: "Leave for Bomdila", location: "", description: "" }], stays: [] }, { name: "Bomdila", attractions: [{ name: "Night stay at Bomdila", location: "", description: "" }], stays: [] }] }, { places: [{ name: "Bomdila", attractions: [{ name: "Bomdila Temple", location: "", description: "" }, { name: "Leave for Tawang", location: "", description: "" }], stays: [] }, { name: "Tawang", attractions: [{ name: "Night Stay at Tawang", location: "", description: "" }], stays: [] }] }, { places: [{ name: "Tawang", attractions: [{ name: "Local Sightseeing", location: "", description: "" }, { name: "Madhuri Lake", location: "", description: "" }, { name: "Bum La Pass", location: "", description: "" }, { name: "Night Stay at Tawang", location: "", description: "" }], stays: [] }] }, { places: [{ name: "Tawang", attractions: [{ name: "Leave for Dirang", location: "", description: "" }], stays: [] }, { name: "Dirang", attractions: [{ name: "Local Sightseeing", location: "", description: "" }, { name: "Night Stay at Dirang", location: "", description: "" }], stays: [] }] }, { places: [{ name: "Dirang", attractions: [{ name: "Leave for Bhalukpong", location: "", description: "" }], stays: [] }, { name: "Bhalukpong", attractions: [{ name: "Nameri Sanctuary", location: "", description: "" }, { name: "Night Stay at Bhalukpong", location: "", description: "" }], stays: [] }] }, { places: [{ name: "Bhalukpong", attractions: [{ name: "Leave for Itanagar", location: "", description: "" }], stays: [] }, { name: "Itanagar", attractions: [{ name: "Local Sightseeing", location: "", description: "" }, { name: "Night Stay at Itanagar", location: "", description: "" }], stays: [] }] }, { places: [{ name: "Itanagar", attractions: [{ name: "Leave for Ziro", location: "", description: "" }], stays: [] }, { name: "Ziro", attractions: [{ name: "Night Stay at Ziro", location: "", description: "" }], stays: [] }] }, { places: [{ name: "Ziro", attractions: [{ name: "Local Sightseeing", location: "", description: "" }, { name: "Leave for Majuli Island", location: "", description: "" }], stays: [] }, { name: "Majuli Island", attractions: [{ name: "Night Stay at Majuli Island", location: "", description: "" }], stays: [] }] }, { places: [{ name: "Majuli Island", attractions: [{ name: "Island Tour", location: "", description: "" }, { name: "Leave for Jorhat", location: "", description: "" }], stays: [] }, { name: "Jorhat", attractions: [{ name: "Jorhat Tea Center", location: "", description: "" }, { name: "Kakochang Falls", location: "", description: "" }, { name: "Leave for Kaziranga", location: "", description: "" }], stays: [] }, { name: "Kaziranga", attractions: [{ name: "Night Stay at Kaziranga", location: "", description: "" }], stays: [] }] }, { places: [{ name: "Kaziranga", attractions: [{ name: "Jeep / Elephant Safari", location: "", description: "" }, { name: "Leave for Kamakhya", location: "", description: "" }], stays: [] }, { name: "Kamakhya", attractions: [{ name: "Kamakhya Temple", location: "", description: "" }, { name: "Leave for Shillong", location: "", description: "" }], stays: [] }, { name: "Shillong", attractions: [{ name: "Night Stay at Shillong", location: "", description: "" }], stays: [] }] }, { places: [{ name: "Shillong", attractions: [{ name: "Leave for Krang Shuri", location: "", description: "" }], stays: [] }, { name: "Krang Shuri", attractions: [{ name: "Krang Shuri Waterfall", location: "", description: "" }, { name: "Leave for Dawki / Shnongpdeng", location: "", description: "" }], stays: [] }, { name: "Dawki / Shnongpdeng", attractions: [{ name: "Boating", location: "", description: "" }, { name: "Camp Stay at Dawki / Shnongpdeng", location: "", description: "" }], stays: [] }] }, { places: [{ name: "Dawki / Shnongpdeng", attractions: [{ name: "Leave for Mawlynnong", location: "", description: "" }], stays: [] }, { name: "Mawlynnong", attractions: [{ name: "Village tour", location: "", description: "The cleanest village in India" }, { name: "Leave for Cherrapunjee", location: "", description: "" }], stays: [] }, { name: "Cherrapunjee", attractions: [{ name: "Night Stay at Cherrapunjee", location: "", description: "" }], stays: [] }] }, { places: [{ name: "Cherrapunjee", attractions: [{ name: "Living Root Bridge", location: "", description: "" }, { name: "Noh Kali Kai Waterfall", location: "", description: "" }, { name: "Seven Sisters Falls", location: "", description: "" }, { name: "Rainbow Falls", location: "", description: "" }, { name: "Local Sightseeing", location: "", description: "" }, { name: "Night Stay at Cherrapunjee", location: "", description: "" }], stays: [] }] }, { places: [{ name: "Cherrapunjee", attractions: [{ name: "Leave for Mawsynram", location: "", description: "" }], stays: [] }, { name: "Khasi Village", attractions: [{ name: "Local Visit on the way to Mawsynram", location: "", description: "" }], stays: [] }, { name: "Mawsynram", attractions: [{ name: "Night Stay at Mawsynram", location: "", description: "" }], stays: [] }] }, { places: [{ name: "Mawsynram", attractions: [{ name: "Local Visit", location: "", description: "The wettest place on Earth" }, { name: "Leave for Airport", location: "", description: "" }], stays: [] }, { name: "Umaim Lake", attractions: [{ name: "Visit Umaim Lake on the return journey", location: "", description: "" }], stays: [] }, { name: "Guwahati", attractions: [{ name: "Arrive at Airport", location: "", description: "" }, { name: "Leave for Mumbai", location: "", description: "" }], stays: [] }] }] };
    this.newTrip = this.tripService.newTrip;
    this.dateOptions = this.tripService.dateOptions;
    this.displayedColumns = this.tripService.displayedColumns;
    this.roomValues = this.tripFormBuilder.roomValues;
  }

  getCurrentDate(startDate: Date, dayIndex: number): string {
    let currentDate = new Date(startDate);
    currentDate.setDate(new Date(startDate).getDate() + dayIndex);
    return currentDate.toLocaleDateString("en-IN", this.dateOptions);
  }

  exportTrip(tripModel: FormData): void {
    this.tripService.exportToJSON(tripModel);
  }

  editTrip(inputObject: {}): void {
    this.tripService.editFlag = true;
    this.tripService.editTrip(inputObject);
    this.router.navigate(["../" + "new"], { relativeTo: this.route });
  }

}
