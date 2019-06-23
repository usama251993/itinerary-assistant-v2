import { Injectable, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormControl, FormGroup } from '@angular/forms';
import { MatBottomSheetRef, MatDialogRef, MatSnackBar, MatBottomSheet, MatDialog, MatStepper } from '@angular/material';
import { FormConfirmModalComponent } from '../../components/form-confirm-modal/form-confirm-modal.component';

@Injectable({
  providedIn: 'root'
})
export class IaTripFormBuilderService {

  tripForm: FormGroup = this.formBuilder.group({});
  loadTripForm: FormGroup = this.formBuilder.group({});
  deleteDialogRef: MatBottomSheetRef = null;
  deleteModalRef: MatDialogRef<FormConfirmModalComponent> = null;
  today: Date = new Date(Date.now());

  displayedColumns: string[] = ["type", "cost"];

  roomOptions: { optionValue: string, optionText: string }[] = [
    { optionValue: "single", optionText: "Single Occupancy" },
    { optionValue: "double", optionText: "Double Occupancy" },
    { optionValue: "multiple", optionText: "Multiple Occupancy" },
    { optionValue: "dormitory", optionText: "Dormitory" },
    { optionValue: "others", optionText: "Others" }
  ];

  roomValues: {} = {};

  constructor(private formBuilder: FormBuilder,
    private formSnackBar: MatSnackBar,
    private formConfirmDialog: MatBottomSheet,
    private formConfirmModal: MatDialog) {

    this.tripForm = this.formBuilder.group({
      tripStart: this.formBuilder.group({
        sourceCity: ["", [Validators.required]],
        startDate: ["", [Validators.required]]
      }),
      days: this.formBuilder.array([this.initializeDaysArray()])
    });

    this.loadTripForm = this.formBuilder.group({
      tripFile: this.formBuilder.control("")
    });

    this.roomOptions.forEach((roomOption) => {
      this.roomValues[roomOption.optionValue] = roomOption.optionText;
    })

  }

  switchStepper(stepper: MatStepper) {
    let timeoutVar = 0;
    timeoutVar = window.requestAnimationFrame(() => {
      stepper.selectedIndex = stepper.steps.length - 1;
      window.cancelAnimationFrame(timeoutVar);
    });
  }

  initializeDaysArray(): FormGroup {
    let dayFormGroup = this.formBuilder.group({
      places: this.formBuilder.array([
        this.initializePlacesArray()
      ])
    });
    dayFormGroup.markAsPristine();
    dayFormGroup.markAsUntouched();
    return dayFormGroup;
  }

  addNewDay(stepper: MatStepper): void {
    (this.tripForm
      .get("days") as FormArray)
      .push(this.initializeDaysArray());

    this.switchStepper(stepper);
  }

  deleteDay(dayIndex: number): void {
    // for MatBottomSheet
    // this.deleteDialogRef = this.formConfirmDialog.open(FormConfirmDialogComponent);
    // this.deleteDialogRef.afterDismissed().subscribe((result) => {
    //   if (result) {
    //     (this.tripForm
    //       .get("days") as FormArray)
    //       .removeAt(dayIndex);
    //     this.formSnackBar.open("Day deleted", "DISMISS", { duration: 2500 });
    //   } else {
    //     this.deleteDialogRef = null;
    //   }
    // });

    // for MatDialog
    this.deleteModalRef = this.formConfirmModal.open(FormConfirmModalComponent);
    this.deleteModalRef.afterClosed().subscribe((result) => {
      if (result) {
        (this.tripForm
          .get("days") as FormArray)
          .removeAt(dayIndex);
        this.formSnackBar.open("Day deleted", "DISMISS", { duration: 2500 });
      } else {
        this.deleteModalRef = null;
      }
    });
  }

  initializePlacesArray(): FormGroup {
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

  addNewPlace(dayIndex: number, stepper: MatStepper): void {
    ((this.tripForm
      .get("days") as FormArray).controls[dayIndex]
      .get("places") as FormArray)
      .push(this.initializePlacesArray());

    this.switchStepper(stepper);
  }

  deletePlace(dayIndex: number, placeIndex: number): void {
    // for MatBottomSheet
    // this.deleteDialogRef = this.formConfirmDialog.open(FormConfirmDialogComponent);
    // this.deleteDialogRef.afterDismissed().subscribe((result) => {
    //   if (result) {
    //     ((this.tripForm
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
        ((this.tripForm
          .get("days") as FormArray).controls[dayIndex]
          .get("places") as FormArray).removeAt(placeIndex);
        this.formSnackBar.open("Place deleted", "DISMISS", { duration: 2500 });
      } else {
        this.deleteModalRef = null;
      }
    })

  }

  initializeAttractionsArray(): FormGroup {
    let attractionFormGroup = this.formBuilder.group({
      name: ["", [Validators.required]],
      location: [""],
      description: [""]
    })
    attractionFormGroup.markAsPristine();
    attractionFormGroup.markAsUntouched();
    return attractionFormGroup;
  }

  addNewAttraction(dayIndex: number, placeIndex: number): void {
    (((this.tripForm
      .get("days") as FormArray).controls[dayIndex]
      .get("places") as FormArray).controls[placeIndex]
      .get("attractions") as FormArray)
      .push(this.initializeAttractionsArray());
  }

  deleteAttraction(dayIndex: number, placeIndex: number, attractionIndex: number): void {
    // for MatBottomSheet
    // this.deleteDialogRef = this.formConfirmDialog.open(FormConfirmDialogComponent);
    // this.deleteDialogRef.afterDismissed().subscribe((result) => {
    //   if (result) {
    //     (((this.tripForm
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
        (((this.tripForm
          .get("days") as FormArray).controls[dayIndex]
          .get("places") as FormArray).controls[placeIndex]
          .get("attractions") as FormArray).removeAt(attractionIndex);
        this.formSnackBar.open("Attraction deleted", "DISMISS", { duration: 2500 });
      } else {
        this.deleteModalRef = null;
      }
    });
  }

  addNewContact(dayIndex: number, placeIndex: number, stayIndex: number): void {
    ((((this.tripForm
      .get("days") as FormArray).controls[dayIndex]
      .get("places") as FormArray).controls[placeIndex]
      .get("stays") as FormArray).controls[stayIndex]
      .get("contacts") as FormArray)
      .push(this.formBuilder.control(""));
  }

  deleteContact(dayIndex: number, placeIndex: number, stayIndex: number, contactIndex: number) {
    ((((this.tripForm
      .get("days") as FormArray).controls[dayIndex]
      .get("places") as FormArray).controls[placeIndex]
      .get("stays") as FormArray).controls[stayIndex]
      .get("contacts") as FormArray).removeAt(contactIndex);
  }

  initializeStaysArray(): FormGroup {
    let stayFormGroup = this.formBuilder.group({
      name: ["", [Validators.required]],
      address: [""],
      contacts: this.formBuilder.array([
        this.formBuilder.control("")
      ]),
      rooms: this.formBuilder.array([
        this.initializeRoomsArray()
      ])
    });
    stayFormGroup.markAsPristine();
    stayFormGroup.markAsUntouched();
    return stayFormGroup;
  }

  addNewStay(dayIndex: number, placeIndex: number): void {
    (((this.tripForm
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
    //     (((this.tripForm
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
        (((this.tripForm
          .get("days") as FormArray).controls[dayIndex]
          .get("places") as FormArray).controls[placeIndex]
          .get("stays") as FormArray).removeAt(stayIndex);
        this.formSnackBar.open("Stay deleted", "DISMISS", { duration: 2500 });
      } else {
        this.deleteModalRef = null;
      }
    });
  }

  initializeRoomsArray(): FormGroup {
    let roomFormGroup = this.formBuilder.group({
      type: ["single"],
      cost: ["", [Validators.required]]
    });
    roomFormGroup.markAsPristine();
    roomFormGroup.markAsUntouched();
    return roomFormGroup;
  }

  addNewRoom(dayIndex: number, placeIndex: number, stayIndex: number): void {
    ((((this.tripForm
      .get("days") as FormArray).controls[dayIndex]
      .get("places") as FormArray).controls[placeIndex]
      .get("stays") as FormArray).controls[stayIndex]
      .get("rooms") as FormArray)
      .push(this.initializeRoomsArray());
  }

  deleteRoom(dayIndex: number, placeIndex: number, stayIndex: number, roomIndex: number): void {
    ((((this.tripForm
      .get("days") as FormArray).controls[dayIndex]
      .get("places") as FormArray).controls[placeIndex]
      .get("stays") as FormArray).controls[stayIndex]
      .get("rooms") as FormArray).removeAt(roomIndex);
    this.formSnackBar.open("Room deleted", "DISMISS", { duration: 2000 });
  }

  buildFormGroup(inputFormGroup: FormGroup, inputFormData: FormData): FormGroup {
    (inputFormGroup
      .get("days") as FormArray)
      .removeAt(0);
    inputFormData["days"].forEach((dayData: {}, dayIndex: number) => {
      (inputFormGroup
        .get("days") as FormArray)
        .push(this.initializeDaysArray());
      ((inputFormGroup
        .get("days") as FormArray).controls[dayIndex]
        .get("places") as FormArray)
        .removeAt(0);

      dayData["places"].forEach((placeData: {}, placeIndex: number) => {
        ((inputFormGroup
          .get("days") as FormArray).controls[dayIndex]
          .get("places") as FormArray)
          .push(this.initializePlacesArray());

        (((inputFormGroup
          .get("days") as FormArray).controls[dayIndex]
          .get("places") as FormArray).controls[placeIndex]
          .get("attractions") as FormArray)
          .removeAt(0);
        placeData["attractions"].forEach((attractionData: {}, attractionIndex: number) => {
          (((inputFormGroup
            .get("days") as FormArray).controls[dayIndex]
            .get("places") as FormArray).controls[placeIndex]
            .get("attractions") as FormArray)
            .push(this.initializeAttractionsArray());
        });

        (((inputFormGroup
          .get("days") as FormArray).controls[dayIndex]
          .get("places") as FormArray).controls[placeIndex]
          .get("stays") as FormArray)
          .removeAt(0);
        placeData["stays"].forEach((stayData: {}, stayIndex: number) => {
          (((inputFormGroup
            .get("days") as FormArray).controls[dayIndex]
            .get("places") as FormArray).controls[placeIndex]
            .get("stays") as FormArray)
            .push(this.initializeStaysArray());

          ((((inputFormGroup
            .get("days") as FormArray).controls[dayIndex]
            .get("places") as FormArray).controls[placeIndex]
            .get("stays") as FormArray).controls[stayIndex]
            .get("contacts") as FormArray)
            .removeAt(0);
          stayData["contacts"].forEach((contactData: string, contactIndex: number) => {
            ((((inputFormGroup
              .get("days") as FormArray).controls[dayIndex]
              .get("places") as FormArray).controls[placeIndex]
              .get("stays") as FormArray).controls[stayIndex]
              .get("contacts") as FormArray)
              .push(this.formBuilder.control(""));
          });

          ((((inputFormGroup
            .get("days") as FormArray).controls[dayIndex]
            .get("places") as FormArray).controls[placeIndex]
            .get("stays") as FormArray).controls[stayIndex]
            .get("rooms") as FormArray)
            .removeAt(0);
          stayData["rooms"].forEach((roomData: {}, roomIndex: number) => {
            ((((inputFormGroup
              .get("days") as FormArray).controls[dayIndex]
              .get("places") as FormArray).controls[placeIndex]
              .get("stays") as FormArray).controls[stayIndex]
              .get("rooms") as FormArray)
              .push(this.initializeRoomsArray());
          });
        });
      });
    })

    return inputFormGroup;
  }

}
