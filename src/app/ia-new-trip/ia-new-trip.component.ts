import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource, MatSnackBar, MatBottomSheet, MatBottomSheetRef, MatDialogRef, MatDialog } from '@angular/material';

import { IaTripService } from '../shared/services/ia-trip.service';
import { IaTripModel } from '../shared/models/ia-trip.model';
import { FormConfirmDialogComponent } from '../shared/components/form-confirm-dialog/form-confirm-dialog.component';
import { FormConfirmModalComponent } from '../shared/components/form-confirm-modal/form-confirm-modal.component';

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

  deleteDialogRef: MatBottomSheetRef = null;
  deleteModalRef: MatDialogRef<FormConfirmModalComponent> = null;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private tripService: IaTripService,
    private formSnackBar: MatSnackBar,
    private formConfirmDialog: MatBottomSheet,
    private formConfirmModal: MatDialog) { }

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
  }

  initializeDaysArray() {
    let dayFormGroup = this.formBuilder.group({
      places: this.formBuilder.array([
        this.initializePlacesArray()
      ])
    });
    dayFormGroup.markAsPristine();
    dayFormGroup.markAsUntouched();
    return dayFormGroup;
  }

  addNewDay() {
    (this.newTripForm.get("trip")
      .get("days") as FormArray)
      .push(this.initializeDaysArray());
  }

  deleteDay(dayIndex: number) {
    // for MatBottomSheet
    // this.deleteDialogRef = this.formConfirmDialog.open(FormConfirmDialogComponent);
    // this.deleteDialogRef.afterDismissed().subscribe((result) => {
    //   if (result) {
    //     (this.newTripForm.get("trip").get("days") as FormArray).removeAt(dayIndex);
    //     this.formSnackBar.open("Day deleted", "DISMISS", { duration: 2500 });
    //   } else {
    //     this.deleteDialogRef = null;
    //   }
    // });

    // for MatDialog
    this.deleteModalRef = this.formConfirmModal.open(FormConfirmModalComponent);
    this.deleteModalRef.afterClosed().subscribe((result) => {
      if (result) {
        (this.newTripForm.get("trip").get("days") as FormArray).removeAt(dayIndex);
        this.formSnackBar.open("Day deleted", "DISMISS", { duration: 2500 });
      } else {
        this.deleteModalRef = null;
      }
    });
  }

  initializePlacesArray() {
    let placeFormGroup = this.formBuilder.group({
      name: ["", [Validators.required]],
      attractions: this.formBuilder.array([
        this.initializeAttractionsArray()
      ]),
      stays: this.formBuilder.array([
        this.initializeStaysArray()
      ])
    });
    placeFormGroup.markAsPristine();
    placeFormGroup.markAsUntouched();
    return placeFormGroup;
  }

  addNewPlace(dayIndex: number) {
    ((this.newTripForm.get("trip")
      .get("days") as FormArray).controls[dayIndex]
      .get("places") as FormArray)
      .push(this.initializePlacesArray());
  }

  deletePlace(dayIndex: number, placeIndex: number) {
    // for MatBottomSheet
    // this.deleteDialogRef = this.formConfirmDialog.open(FormConfirmDialogComponent);
    // this.deleteDialogRef.afterDismissed().subscribe((result) => {
    //   if (result) {
    //     ((this.newTripForm.get("trip")
    //       .get("days") as FormArray).controls[dayIndex]
    //       .get("places") as FormArray).removeAt(placeIndex);
    //     this.formSnackBar.open("Place deleted", "DISMISS", { duration: 2500 });
    //   } else {
    //     this.deleteDialogRef = null;
    //   }
    // });

    // for MatDialog
    this.deleteModalRef = this.formConfirmModal.open(FormConfirmModalComponent);
    this.deleteModalRef.afterClosed().subscribe((result) => {
      if (result) {
        ((this.newTripForm.get("trip")
          .get("days") as FormArray).controls[dayIndex]
          .get("places") as FormArray).removeAt(placeIndex);
        this.formSnackBar.open("Place deleted", "DISMISS", { duration: 2500 });
      } else {
        this.deleteModalRef = null;
      }
    })

  }

  initializeAttractionsArray() {
    let attractionFormGroup = this.formBuilder.group({
      name: ["", [Validators.required]],
      description: [""]
    })
    attractionFormGroup.markAsPristine();
    attractionFormGroup.markAsUntouched();
    return attractionFormGroup;
  }

  addNewAttraction(dayIndex: number, placeIndex: number) {
    (((this.newTripForm.get("trip")
      .get("days") as FormArray).controls[dayIndex]
      .get("places") as FormArray).controls[placeIndex]
      .get("attractions") as FormArray)
      .push(this.initializeAttractionsArray());
  }

  deleteAttraction(dayIndex: number, placeIndex: number, attractionIndex: number) {
    // for MatBottomSheet
    // this.deleteDialogRef = this.formConfirmDialog.open(FormConfirmDialogComponent);
    // this.deleteDialogRef.afterDismissed().subscribe((result) => {
    //   if (result) {
    //     (((this.newTripForm.get("trip")
    //       .get("days") as FormArray).controls[dayIndex]
    //       .get("places") as FormArray).controls[placeIndex]
    //       .get("attractions") as FormArray).removeAt(attractionIndex);
    //     this.formSnackBar.open("Attraction deleted", "DISMISS", { duration: 2500 });
    //   } else {
    //     this.deleteDialogRef = null;
    //   }
    // });

    // for MatDialog
    this.deleteModalRef = this.formConfirmModal.open(FormConfirmModalComponent);
    this.deleteModalRef.afterClosed().subscribe((result) => {
      if (result) {
        (((this.newTripForm.get("trip")
          .get("days") as FormArray).controls[dayIndex]
          .get("places") as FormArray).controls[placeIndex]
          .get("attractions") as FormArray).removeAt(attractionIndex);
        this.formSnackBar.open("Attraction deleted", "DISMISS", { duration: 2500 });
      } else {
        this.deleteModalRef = null;
      }
    });
  }

  initializeStaysArray() {
    let stayFormGroup = this.formBuilder.group({
      name: ["", [Validators.required]],
      address: [""],
      contact: [""],
      rooms: this.formBuilder.array([
        this.initializeRoomsArray()
      ])
    });
    stayFormGroup.markAsPristine();
    stayFormGroup.markAsUntouched();
    return stayFormGroup;
  }

  addNewStay(dayIndex: number, placeIndex: number) {
    (((this.newTripForm.get("trip")
      .get("days") as FormArray).controls[dayIndex]
      .get("places") as FormArray).controls[placeIndex]
      .get("stays") as FormArray)
      .push(this.initializeStaysArray());
  }

  deleteStay(dayIndex: number, placeIndex: number, stayIndex: number) {
    // for MatBottomSheet
    // this.deleteDialogRef = this.formConfirmDialog.open(FormConfirmDialogComponent);
    // this.deleteDialogRef.afterDismissed().subscribe((result) => {
    //   if (result) {
    //     (((this.newTripForm.get("trip")
    //       .get("days") as FormArray).controls[dayIndex]
    //       .get("places") as FormArray).controls[placeIndex]
    //       .get("stays") as FormArray).removeAt(stayIndex);
    //     this.formSnackBar.open("Stay deleted", "DISMISS", { duration: 2500 });
    //   } else {
    //     this.deleteDialogRef = null;
    //   }
    // });

    // for MatDialog
    this.deleteModalRef = this.formConfirmModal.open(FormConfirmModalComponent);
    this.deleteModalRef.afterClosed().subscribe((result) => {
      if (result) {
        (((this.newTripForm.get("trip")
          .get("days") as FormArray).controls[dayIndex]
          .get("places") as FormArray).controls[placeIndex]
          .get("stays") as FormArray).removeAt(stayIndex);
        this.formSnackBar.open("Stay deleted", "DISMISS", { duration: 2500 });
      } else {
        this.deleteModalRef = null;
      }
    });
  }

  initializeRoomsArray() {
    let roomFormGroup = this.formBuilder.group({
      type: [""],
      cost: ["", [Validators.required]]
    });
    roomFormGroup.markAsPristine();
    roomFormGroup.markAsUntouched();
    return roomFormGroup;
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
    this.formSnackBar.open("Room deleted", "DISMISS", { duration: 2000 });
  }

  clearInput(control: FormControl): void {
    control.setValue("");
  }

  formSubmit(): void {
    // this.router.navigate(["../" + "view"], { relativeTo: this.route });
    this.tripService.createNewTrip(this.newTripForm.get("trip").value);
    this.router.navigate(["../" + "view-revised"], { relativeTo: this.route });
  }

}
