import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IaTripService } from '../shared/services/ia-trip.service';
import { IaTripModel } from '../shared/models/ia-trip.model';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-ia-trip',
  templateUrl: './ia-new-trip.component.html',
  styleUrls: ['./ia-new-trip.component.scss']
})
export class IaNewTripComponent implements OnInit {

  newTripForm: FormGroup = this.formBuilder.group({});
  newTripObject: IaTripModel;

  daysArray: FormArray = this.formBuilder.array([]);
  placesArray: FormArray = this.formBuilder.array([]);
  attractionsArray: FormArray = this.formBuilder.array([]);
  staysArray: FormArray = this.formBuilder.array([]);
  roomsArray: FormArray = this.formBuilder.array([]);

  today: Date = new Date(Date.now());

  emptyRoomData: { type: string, cost: number }[] = [{ type: "", cost: 0 }];
  dataSource: MatTableDataSource<{ type: string, cost: number }> = new MatTableDataSource(this.emptyRoomData);
  roomOptions: { optionText: string, optionValue: string }[] = [];
  displayedColumns: string[] = ["type", "cost", "actions"];

  stepperControlGroupOne: FormGroup = this.formBuilder.group({
    sourceCity: ["", [Validators.required]],
    startDate: ["", [Validators.required]]
  });
  stepperControlGroupTwo: FormGroup = this.formBuilder.group({});

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private tripService: IaTripService) { }

  ngOnInit(): void {
    this.newTripForm = this.formBuilder.group({
      trip: this.formBuilder.group({
        tripInit: this.formBuilder.group({
          sourceCity: ["", [Validators.required]],
          startDate: ["", [Validators.required]]
        }),
        days: this.formBuilder.array([this.initializeDaysArray()])
      })
    });
    this.roomOptions = this.tripService.roomOptions;
    console.log(this.newTripForm.get("trip"));
  }

  initializeDaysArray() {
    return this.formBuilder.group({
      places: this.formBuilder.array([
        this.initializePlacesArray()
      ])
    });
  }

  addNewDay() {
    (this.newTripForm.get("trip")
      .get("days") as FormArray)
      .push(this.initializeDaysArray());
  }

  initializePlacesArray() {
    return this.formBuilder.group({
      name: ["", [Validators.required]],
      attractions: this.formBuilder.array([
        this.initializeAttractionsArray()
      ]),
      stays: this.formBuilder.array([
        this.initializeStaysArray()
      ])
    })
  }

  addNewPlace(dayIndex: number) {
    ((this.newTripForm.get("trip")
      .get("days") as FormArray).controls[dayIndex]
      .get("places") as FormArray)
      .push(this.initializePlacesArray());
  }

  initializeAttractionsArray() {
    return this.formBuilder.group({
      name: ["", [Validators.required]],
      description: [""]
    })
  }

  addNewAttraction(dayIndex: number, placeIndex: number) {
    (((this.newTripForm.get("trip")
      .get("days") as FormArray).controls[dayIndex]
      .get("places") as FormArray).controls[placeIndex]
      .get("attractions") as FormArray)
      .push(this.initializeAttractionsArray());
  }

  initializeStaysArray() {
    return this.formBuilder.group({
      name: ["", [Validators.required]],
      address: [""],
      contact: [""],
      rooms: this.formBuilder.array([
        this.initializeRoomsArray()
      ])
    })
  }

  addNewStay(dayIndex: number, placeIndex: number) {
    (((this.newTripForm.get("trip")
      .get("days") as FormArray).controls[dayIndex]
      .get("places") as FormArray).controls[placeIndex]
      .get("stays") as FormArray)
      .push(this.initializeStaysArray());
  }

  initializeRoomsArray() {
    return this.formBuilder.group({
      type: [""],
      cost: ["", [Validators.required]]
    })
  }

  addNewRoom(dayIndex: number, placeIndex: number, stayIndex: number) {
    ((((this.newTripForm.get("trip")
      .get("days") as FormArray).controls[dayIndex]
      .get("places") as FormArray).controls[placeIndex]
      .get("stays") as FormArray).controls[stayIndex]
      .get("rooms") as FormArray)
      .push(this.initializeRoomsArray());
  }

  deleteRoom(dayIndex: number, placeIndex: number, stayIndex: number, roomIndex: number) {
    ((((this.newTripForm.get("trip")
      .get("days") as FormArray).controls[dayIndex]
      .get("places") as FormArray).controls[placeIndex]
      .get("stays") as FormArray).controls[stayIndex]
      .get("rooms") as FormArray).removeAt(roomIndex);
  }

  // sendToNextStep(sourceCity: FormControl, startDate: FormControl): void {
  //   this.newTripObject = {
  //     trip: {
  //       id: Math.round(Math.random() * 10000),
  //       title: sourceCity.value,
  //       sourceCity: sourceCity.value,
  //       startDate: (startDate.value as Date),
  //       isOneDayTrip: false,
  //       days: []
  //     }
  //   }
  // }

  clearInput(control: FormControl): void {
    control.setValue("");
  }

  formSubmit(): void {
    this.router.navigate(["../" + "view"], { relativeTo: this.route });
    this.tripService.initNewTrip(this.newTripForm.value);
  }

}
