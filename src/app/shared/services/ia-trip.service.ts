import { Injectable } from '@angular/core';

import { IaTripModel } from '../models/ia-trip.model';
import { IaTripDayModel } from '../models/ia-trip-day.model';
import { IaTripPlaceModel } from '../models/ia-trip-place.model';
import { IaPlaceAttractionModel } from '../models/ia-place-attraction.model';
import { IaPlaceStayModel } from '../models/ia-place-stay.model';
import { IaStayRoomModel } from '../models/ia-stay-room.model';
import { IaTripTransitModel } from '../models/ia-trip-transit.model';
import { FormGroup } from '@angular/forms';
import { IaTripFormBuilderService } from './ia-trip/ia-trip-form-builder.service';

@Injectable({
  providedIn: 'root'
})
export class IaTripService {

  displayedColumns: string[] = ["type", "cost"];
  tripURL: string = "assets\\data\\generated\\trip 2019-06-14T11_20_13.689Z.json";
  dateOptions: {} = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  export: { fileURI: string, fileName: string } = { fileURI: "", fileName: "trip " + new Date(Date.now()).toISOString() + ".json" };
  newTrip: {} = { tripStart: { sourceCity: "", startDate: new Date(Date.now()) }, days: [] };
  editFlag: boolean = false;

  tripsArray: IaTripModel[] = [
    // new IaTripModel({
    //   id: 0, sourceCity: "Mumbai", startDate: new Date(Date.now()), isOneDayTrip: false, title: "North East",
    //   days: [
    //     new IaTripDayModel({
    //       isTerminalDay: true, places: [
    //         new IaTripPlaceModel({
    //           name: "Mumbai", attractions: [], stays: []
    //         }), new IaTripPlaceModel({
    //           name: "Guwahati", attractions: [
    //             new IaPlaceAttractionModel({ name: "State Museum" }),
    //             new IaPlaceAttractionModel({ name: "Garden" })
    //           ],
    //           stays: [
    //             new IaPlaceStayModel({
    //               name: "Hotel Sunset View", address: "Main Road", contact: "+91 80977 28350",
    //               rooms: [
    //                 new IaStayRoomModel({ type: "Twin Sharing", cost: 2000 }),
    //                 new IaStayRoomModel({ type: "Four in 1", cost: 5000 })
    //               ]
    //             }), new IaPlaceStayModel({
    //               name: "Hotel Valley View", address: "Tawang Road", contact: "+91 98198 87617",
    //               rooms: [
    //                 new IaStayRoomModel({ type: "Twin Sharing", cost: 2500 }),
    //                 new IaStayRoomModel({ type: "Four in 1", cost: 7000 })
    //               ]
    //             })
    //           ]
    //         })
    //       ],
    //       transit: [
    //         new IaTripTransitModel({ mode: "Xylo", cost: 5000 }),
    //         new IaTripTransitModel({ mode: "Royal Enfield", cost: 3000 })
    //       ]
    //     }),
    //     new IaTripDayModel({
    //       places: [
    //         new IaTripPlaceModel({
    //           name: "Guwahati", attractions: [
    //             new IaPlaceAttractionModel({ name: "State Museum" }),
    //             new IaPlaceAttractionModel({ name: "Garden" })
    //           ],
    //           stays: [
    //             new IaPlaceStayModel({
    //               name: "Hotel Sunset View", address: "Main Road", contact: "+91 80977 28350",
    //               rooms: [
    //                 new IaStayRoomModel({ type: "Twin Sharing", cost: 2000 }),
    //                 new IaStayRoomModel({ type: "Four in 1", cost: 5000 })
    //               ]
    //             }),
    //             new IaPlaceStayModel({
    //               name: "Hotel Valley View", address: "Tawang Road", contact: "+91 98198 87617",
    //               rooms: [
    //                 new IaStayRoomModel({ type: "Twin Sharing", cost: 2500 }),
    //                 new IaStayRoomModel({ type: "Four in 1", cost: 7000 })
    //               ]
    //             })
    //           ]
    //         }),
    //         new IaTripPlaceModel({
    //           name: "Tawang", attractions: [
    //             new IaPlaceAttractionModel({ name: "Monastery" }),
    //             new IaPlaceAttractionModel({ name: "Bum La Pass" })
    //           ],
    //           stays: [
    //             new IaPlaceStayModel({
    //               name: "Hotel Monastery View", address: "Monastery Road", contact: "+91 90222 37199",
    //               rooms: [
    //                 new IaStayRoomModel({ type: "Twin Sharing", cost: 1500 }),
    //                 new IaStayRoomModel({ type: "Four in 1", cost: 3000 })
    //               ]
    //             }),
    //             new IaPlaceStayModel({
    //               name: "Hotel Pass View", address: "Bum La Pass Road", contact: "+91 80873 78899",
    //               rooms: [
    //                 new IaStayRoomModel({ type: "Twin Sharing", cost: 2000 }),
    //                 new IaStayRoomModel({ type: "Four in 1", cost: 4000 })
    //               ]
    //             })
    //           ]
    //         })
    //       ],
    //       transit: [
    //         new IaTripTransitModel({ mode: "Xylo", cost: 5000 }),
    //         new IaTripTransitModel({ mode: "Royal Enfield", cost: 3000 })
    //       ]
    //     }),
    //     new IaTripDayModel({
    //       places: [
    //         new IaTripPlaceModel({
    //           name: "Tawang", attractions: [
    //             new IaPlaceAttractionModel({ name: "State Museum" }),
    //             new IaPlaceAttractionModel({ name: "Garden" })
    //           ],
    //           stays: [
    //             new IaPlaceStayModel({
    //               name: "Hotel Sunset View", address: "Main Road", contact: "+91 80977 28350",
    //               rooms: [
    //                 new IaStayRoomModel({ type: "Twin Sharing", cost: 2000 }),
    //                 new IaStayRoomModel({ type: "Four in 1", cost: 5000 })
    //               ]
    //             }),
    //             new IaPlaceStayModel({
    //               name: "Hotel Valley View", address: "Tawang Road", contact: "+91 98198 87617",
    //               rooms: [
    //                 new IaStayRoomModel({ type: "Twin Sharing", cost: 2500 }),
    //                 new IaStayRoomModel({ type: "Four in 1", cost: 7000 })
    //               ]
    //             })
    //           ]
    //         }),
    //         new IaTripPlaceModel({
    //           name: "Itanagar", attractions: [
    //             new IaPlaceAttractionModel({ name: "Ziro Valley" }),
    //             new IaPlaceAttractionModel({ name: "Majuli Island" })
    //           ],
    //           stays: [
    //             new IaPlaceStayModel({
    //               name: "Hotel Ziro Grand", address: "Mall Road", contact: "+91 73878 18160",
    //               rooms: [
    //                 new IaStayRoomModel({ type: "Twin Sharing", cost: 2000 }),
    //                 new IaStayRoomModel({ type: "Four in 1", cost: 5000 })
    //               ]
    //             }),
    //             new IaPlaceStayModel({
    //               name: "Itanagar Dormitories", address: "Central Road", contact: "+91 88988 42226",
    //               rooms: [
    //                 new IaStayRoomModel({ type: "Twin Sharing", cost: 4500 }),
    //                 new IaStayRoomModel({ type: "Four in 1", cost: 8000 })
    //               ]
    //             })
    //           ]
    //         }),
    //       ],
    //       transit: [
    //         new IaTripTransitModel({ mode: "Xylo", cost: 5000 }),
    //         new IaTripTransitModel({ mode: "Royal Enfield", cost: 3000 })
    //       ]
    //     }),
    //     new IaTripDayModel({
    //       places: [
    //         new IaTripPlaceModel({
    //           name: "Itanagar", attractions: [
    //             new IaPlaceAttractionModel({ name: "Ziro Valley" }),
    //             new IaPlaceAttractionModel({ name: "Majuli Island" })
    //           ],
    //           stays: [
    //             new IaPlaceStayModel({
    //               name: "Hotel Ziro Grand", address: "Mall Road", contact: "+91 73878 18160",
    //               rooms: [
    //                 new IaStayRoomModel({ type: "Twin Sharing", cost: 2000 }),
    //                 new IaStayRoomModel({ type: "Four in 1", cost: 5000 })
    //               ]
    //             }),
    //             new IaPlaceStayModel({
    //               name: "Itanagar Dormitories", address: "Central Road", contact: "+91 88988 42226",
    //               rooms: [
    //                 new IaStayRoomModel({ type: "Twin Sharing", cost: 4500 }),
    //                 new IaStayRoomModel({ type: "Four in 1", cost: 8000 })
    //               ]
    //             })
    //           ]
    //         }),
    //         new IaTripPlaceModel({
    //           name: "Shillong", attractions: [
    //             new IaPlaceAttractionModel({ name: "Cherrapunjee" }),
    //             new IaPlaceAttractionModel({ name: "Mawsynram" })
    //           ],
    //           stays: [
    //             new IaPlaceStayModel({
    //               name: "Hotel Waterfall View", address: "Waterfall Road", contact: "+91 84463 30021",
    //               rooms: [
    //                 new IaStayRoomModel({ type: "Twin Sharing", cost: 2000 }),
    //                 new IaStayRoomModel({ type: "Four in 1", cost: 4000 })
    //               ]
    //             }),
    //             new IaPlaceStayModel({
    //               name: "Hotel Lake View", address: "Umaim Lake Road", contact: "+91 97693 25528",
    //               rooms: [
    //                 new IaStayRoomModel({ type: "Twin Sharing", cost: 3000 }),
    //                 new IaStayRoomModel({ type: "Four in 1", cost: 7000 })
    //               ]
    //             })
    //           ]
    //         })
    //       ],
    //       transit: [
    //         new IaTripTransitModel({ mode: "Xylo", cost: 5000 }),
    //         new IaTripTransitModel({ mode: "Royal Enfield", cost: 3000 })
    //       ]
    //     }),
    //     new IaTripDayModel({
    //       isTerminalDay: false, places: [
    //         new IaTripPlaceModel({
    //           name: "Shillong", attractions: [
    //             new IaPlaceAttractionModel({ name: "Cherrapunjee" }),
    //             new IaPlaceAttractionModel({ name: "Mawsynram" })
    //           ],
    //           stays: [
    //             new IaPlaceStayModel({
    //               name: "Hotel Waterfall View", address: "Waterfall Road", contact: "+91 84463 30021",
    //               rooms: [
    //                 new IaStayRoomModel({ type: "Twin Sharing", cost: 2000 }),
    //                 new IaStayRoomModel({ type: "Four in 1", cost: 4000 })
    //               ]
    //             }),
    //             new IaPlaceStayModel({
    //               name: "Hotel Lake View", address: "Umaim Lake Road", contact: "+91 97693 25528",
    //               rooms: [
    //                 new IaStayRoomModel({ type: "Twin Sharing", cost: 3000 }),
    //                 new IaStayRoomModel({ type: "Four in 1", cost: 7000 })
    //               ]
    //             })
    //           ]
    //         }),
    //         new IaTripPlaceModel({
    //           name: "Mumbai", attractions: [], stays: []
    //         })
    //       ],
    //       transit: [
    //         new IaTripTransitModel({ mode: "Xylo", cost: 5000 }),
    //         new IaTripTransitModel({ mode: "Royal Enfield", cost: 3000 })
    //       ]
    //     })
    //   ]
    // })
  ]


  constructor(private tripFormBuilder: IaTripFormBuilderService) { }

  createNewTrip(formData: FormData) {
    this.newTrip = formData;
  }

  exportToJSON(tripModel: FormData) {
    this.export.fileURI = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(tripModel));
    let anchorElement = window.document.createElement("a");
    anchorElement.setAttribute("href", this.export.fileURI);
    anchorElement.setAttribute("download", this.export.fileName);

    let timeoutVar = 0;
    timeoutVar = window.requestAnimationFrame(() => {
      anchorElement.click();
      window.cancelAnimationFrame(timeoutVar);
    });
  }

  importFromJSON(fileToUpload: File) {
    this.newTrip = {};
    let fileReader = new FileReader();
    fileReader.readAsText(fileToUpload);
    fileReader.addEventListener("loadend", () => {
      this.newTrip = JSON.parse(fileReader.result.toString());
    }, false);
  }

  editTrip(inputObject: {}) {
    this.newTrip = inputObject;
  }

  customSetValue(inputFormGroup: FormGroup, inputFormData: FormData) {
    inputFormGroup = this.tripFormBuilder.buildFormGroup(inputFormGroup, inputFormData);
    inputFormGroup.patchValue(inputFormData);
  }
}

