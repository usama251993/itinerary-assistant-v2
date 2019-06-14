import { Injectable } from '@angular/core';

import { IaTripModel } from '../models/ia-trip.model';
import { IaTripDayModel } from '../models/ia-trip-day.model';
import { IaTripPlaceModel } from '../models/ia-trip-place.model';
import { IaPlaceAttractionModel } from '../models/ia-place-attraction.model';
import { IaPlaceStayModel } from '../models/ia-place-stay.model';
import { IaStayRoomModel } from '../models/ia-stay-room.model';
import { IaTripTransitModel } from '../models/ia-trip-transit.model';

@Injectable({
  providedIn: 'root'
})
export class IaTripService {

  displayedColumns: string[] = ["type", "cost", "actions"];

  trips: IaTripModel[] = [
    // new IaTripModel({
    // id: 0,
    // sourceCity: "Mumbai",
    // startDate: new Date(Date.now()),
    // isOneDayTrip: false,
    // title: "North East",
    // days: [
    // new IaTripDayModel({
    // isTerminalDay: true,
    // places: [
    // new IaTripPlaceModel({
    // name: "Mumbai",
    // attractions: [],
    // stays: []
    // }),
    // new IaTripPlaceModel({
    // name: "Guwahati",
    // attractions: [
    // new IaPlaceAttractionModel({
    // name: "State Museum"
    // }),
    // new IaPlaceAttractionModel({
    // name: "Garden"
    // })
    // ],
    // stays: [
    // new IaPlaceStayModel({
    // name: "Hotel Sunset View",
    // address: "Main Road",
    // contact: "+91 80977 28350",
    // rooms: [
    // new IaStayRoomModel({
    // type: "Twin Sharing",
    // cost: 2000
    // }),
    // new IaStayRoomModel({
    // type: "Four in 1",
    // cost: 5000
    // })
    // ]
    // }),
    // new IaPlaceStayModel({
    // name: "Hotel Valley View",
    // address: "Tawang Road",
    // contact: "+91 98198 87617",
    // rooms: [
    // new IaStayRoomModel({
    // type: "Twin Sharing",
    // cost: 2500
    // }),
    // new IaStayRoomModel({
    // type: "Four in 1",
    // cost: 7000
    // })
    // ]
    // })
    // ]
    // })
    // ],
    // transit: [
    // new IaTripTransitModel({
    // mode: "Xylo",
    // cost: 5000
    // }),
    // new IaTripTransitModel({
    // mode: "Royal Enfield",
    // cost: 3000
    // })
    // ]
    // }),
    // new IaTripDayModel({
    // places: [
    // new IaTripPlaceModel({
    // name: "Guwahati",
    // attractions: [
    // new IaPlaceAttractionModel({
    // name: "State Museum"
    // }),
    // new IaPlaceAttractionModel({
    // name: "Garden"
    // })
    // ],
    // stays: [
    // new IaPlaceStayModel({
    // name: "Hotel Sunset View",
    // address: "Main Road",
    // contact: "+91 80977 28350",
    // rooms: [
    // new IaStayRoomModel({
    // type: "Twin Sharing",
    // cost: 2000
    // }),
    // new IaStayRoomModel({
    // type: "Four in 1",
    // cost: 5000
    // })
    // ]
    // }),
    // new IaPlaceStayModel({
    // name: "Hotel Valley View",
    // address: "Tawang Road",
    // contact: "+91 98198 87617",
    // rooms: [
    // new IaStayRoomModel({
    // type: "Twin Sharing",
    // cost: 2500
    // }),
    // new IaStayRoomModel({
    // type: "Four in 1",
    // cost: 7000
    // })
    // ]
    // })
    // ]
    // }),
    // new IaTripPlaceModel({
    // name: "Tawang",
    // attractions: [
    // new IaPlaceAttractionModel({
    // name: "Monastery"
    // }),
    // new IaPlaceAttractionModel({
    // name: "Bum La Pass"
    // })
    // ],
    // stays: [
    // new IaPlaceStayModel({
    // name: "Hotel Monastery View",
    // address: "Monastery Road",
    // contact: "+91 90222 37199",
    // rooms: [
    // new IaStayRoomModel({
    // type: "Twin Sharing",
    // cost: 1500
    // }),
    // new IaStayRoomModel({
    // type: "Four in 1",
    // cost: 3000
    // })
    // ]
    // }),
    // new IaPlaceStayModel({
    // name: "Hotel Pass View",
    // address: "Bum La Pass Road",
    // contact: "+91 80873 78899",
    // rooms: [
    // new IaStayRoomModel({
    // type: "Twin Sharing",
    // cost: 2000
    // }),
    // new IaStayRoomModel({
    // type: "Four in 1",
    // cost: 4000
    // })
    // ]
    // })
    // ]
    // })
    // ],
    // transit: [
    // new IaTripTransitModel({
    // mode: "Xylo",
    // cost: 5000
    // }),
    // new IaTripTransitModel({
    // mode: "Royal Enfield",
    // cost: 3000
    // })
    // ]
    // }),
    // new IaTripDayModel({
    // places: [
    // new IaTripPlaceModel({
    // name: "Tawang",
    // attractions: [
    // new IaPlaceAttractionModel({
    // name: "State Museum"
    // }),
    // new IaPlaceAttractionModel({
    // name: "Garden"
    // })
    // ],
    // stays: [
    // new IaPlaceStayModel({
    // name: "Hotel Sunset View",
    // address: "Main Road",
    // contact: "+91 80977 28350",
    // rooms: [
    // new IaStayRoomModel({
    // type: "Twin Sharing",
    // cost: 2000
    // }),
    // new IaStayRoomModel({
    // type: "Four in 1",
    // cost: 5000
    // })
    // ]
    // }),
    // new IaPlaceStayModel({
    // name: "Hotel Valley View",
    // address: "Tawang Road",
    // contact: "+91 98198 87617",
    // rooms: [
    // new IaStayRoomModel({
    // type: "Twin Sharing",
    // cost: 2500
    // }),
    // new IaStayRoomModel({
    // type: "Four in 1",
    // cost: 7000
    // })
    // ]
    // })
    // ]
    // }),
    // new IaTripPlaceModel({
    // name: "Itanagar",
    // attractions: [
    // new IaPlaceAttractionModel({
    // name: "Ziro Valley"
    // }),
    // new IaPlaceAttractionModel({
    // name: "Majuli Island"
    // })
    // ],
    // stays: [
    // new IaPlaceStayModel({
    // name: "Hotel Ziro Grand",
    // address: "Mall Road",
    // contact: "+91 73878 18160",
    // rooms: [
    // new IaStayRoomModel({
    // type: "Twin Sharing",
    // cost: 2000
    // }),
    // new IaStayRoomModel({
    // type: "Four in 1",
    // cost: 5000
    // })
    // ]
    // }),
    // new IaPlaceStayModel({
    // name: "Itanagar Dormitories",
    // address: "Central Road",
    // contact: "+91 88988 42226",
    // rooms: [
    // new IaStayRoomModel({
    // type: "Twin Sharing",
    // cost: 4500
    // }),
    // new IaStayRoomModel({
    // type: "Four in 1",
    // cost: 8000
    // })
    // ]
    // })
    // ]
    // }),
    // ],
    // transit: [
    // new IaTripTransitModel({
    // mode: "Xylo",
    // cost: 5000
    // }),
    // new IaTripTransitModel({
    // mode: "Royal Enfield",
    // cost: 3000
    // })
    // ]
    // }),
    // new IaTripDayModel({
    // places: [
    // new IaTripPlaceModel({
    // name: "Itanagar",
    // attractions: [
    // new IaPlaceAttractionModel({
    // name: "Ziro Valley"
    // }),
    // new IaPlaceAttractionModel({
    // name: "Majuli Island"
    // })
    // ],
    // stays: [
    // new IaPlaceStayModel({
    // name: "Hotel Ziro Grand",
    // address: "Mall Road",
    // contact: "+91 73878 18160",
    // rooms: [
    // new IaStayRoomModel({
    // type: "Twin Sharing",
    // cost: 2000
    // }),
    // new IaStayRoomModel({
    // type: "Four in 1",
    // cost: 5000
    // })
    // ]
    // }),
    // new IaPlaceStayModel({
    // name: "Itanagar Dormitories",
    // address: "Central Road",
    // contact: "+91 88988 42226",
    // rooms: [
    // new IaStayRoomModel({
    // type: "Twin Sharing",
    // cost: 4500
    // }),
    // new IaStayRoomModel({
    // type: "Four in 1",
    // cost: 8000
    // })
    // ]
    // })
    // ]
    // }),
    // new IaTripPlaceModel({
    // name: "Shillong",
    // attractions: [
    // new IaPlaceAttractionModel({
    // name: "Cherrapunjee"
    // }),
    // new IaPlaceAttractionModel({
    // name: "Mawsynram"
    // })
    // ],
    // stays: [
    // new IaPlaceStayModel({
    // name: "Hotel Waterfall View",
    // address: "Waterfall Road",
    // contact: "+91 84463 30021",
    // rooms: [
    // new IaStayRoomModel({
    // type: "Twin Sharing",
    // cost: 2000
    // }),
    // new IaStayRoomModel({
    // type: "Four in 1",
    // cost: 4000
    // })
    // ]
    // }),
    // new IaPlaceStayModel({
    // name: "Hotel Lake View",
    // address: "Umaim Lake Road",
    // contact: "+91 97693 25528",
    // rooms: [
    // new IaStayRoomModel({
    // type: "Twin Sharing",
    // cost: 3000
    // }),
    // new IaStayRoomModel({
    // type: "Four in 1",
    // cost: 7000
    // })
    // ]
    // })
    // ]
    // })
    // ],
    // transit: [
    // new IaTripTransitModel({
    // mode: "Xylo",
    // cost: 5000
    // }),
    // new IaTripTransitModel({
    // mode: "Royal Enfield",
    // cost: 3000
    // })
    // ]
    // }),
    // new IaTripDayModel({
    // isTerminalDay: false,
    // places: [
    // new IaTripPlaceModel({
    // name: "Shillong",
    // attractions: [
    // new IaPlaceAttractionModel({
    // name: "Cherrapunjee"
    // }),
    // new IaPlaceAttractionModel({
    // name: "Mawsynram"
    // })
    // ],
    // stays: [
    // new IaPlaceStayModel({
    // name: "Hotel Waterfall View",
    // address: "Waterfall Road",
    // contact: "+91 84463 30021",
    // rooms: [
    // new IaStayRoomModel({
    // type: "Twin Sharing",
    // cost: 2000
    // }),
    // new IaStayRoomModel({
    // type: "Four in 1",
    // cost: 4000
    // })
    // ]
    // }),
    // new IaPlaceStayModel({
    // name: "Hotel Lake View",
    // address: "Umaim Lake Road",
    // contact: "+91 97693 25528",
    // rooms: [
    // new IaStayRoomModel({
    // type: "Twin Sharing",
    // cost: 3000
    // }),
    // new IaStayRoomModel({
    // type: "Four in 1",
    // cost: 7000
    // })
    // ]
    // })
    // ]
    // }),
    // new IaTripPlaceModel({
    // name: "Mumbai",
    // attractions: [],
    // stays: []
    // })
    // ],
    // transit: [
    // new IaTripTransitModel({
    // mode: "Xylo",
    // cost: 5000
    // }),
    // new IaTripTransitModel({
    // mode: "Royal Enfield",
    // cost: 3000
    // })
    // ]
    // })
    // ]
    // })
  ]

  roomOptions: { optionValue: string, optionText: string }[] = [
    { optionValue: "single", optionText: "Single Occupancy" },
    { optionValue: "double", optionText: "Double Occupancy" },
    { optionValue: "multiple", optionText: "Multiple Occupancy" },
    { optionValue: "dormitory", optionText: "Dormitory" },
    { optionValue: "others", optionText: "Others" }
  ];

  tripInitData: FormData;

  constructor() { }

  initNewTrip(formData: FormData) {
    this.tripInitData = formData;
  }

  createNewTrip(formData: FormData) {

    let tripInitObject = {};
    let tempObject = {
      days: [],
      places: [],
      attractions: [],
      stays: [],
      rooms: []
    };

    for (let key of Object.keys(formData["tripInit"])) {
      tripInitObject[key] = formData["tripInit"][key]
    }

    formData["days"].forEach((dayEntry: IaTripDayModel) => {
      tempObject.days.push(new IaTripDayModel({
        places: returnPlaces(dayEntry)
      }));
    });

    function returnPlaces(dayEntry: IaTripDayModel): IaTripPlaceModel[] {
      tempObject.places = [];
      dayEntry["places"].forEach((placeEntry: IaTripPlaceModel) => {
        tempObject.places.push(new IaTripPlaceModel({
          name: placeEntry["name"],
          attractions: returnAttractions(placeEntry),
          stays: returnStays(placeEntry)
        }));
      });
      return tempObject.places;
    }

    function returnAttractions(placeEntry: IaTripPlaceModel): IaPlaceAttractionModel[] {
      tempObject.attractions = [];
      placeEntry["attractions"].forEach((attractionEntry: IaPlaceAttractionModel) => {
        tempObject.attractions.push(new IaPlaceAttractionModel({
          name: attractionEntry["name"],
          description: attractionEntry["description"]
        }));
      });
      return tempObject.attractions;
    }

    function returnStays(placeEntry: IaTripPlaceModel): IaPlaceStayModel[] {
      tempObject.stays = [];
      placeEntry["stays"].forEach((stayEntry: IaPlaceStayModel) => {
        tempObject.stays.push(new IaPlaceStayModel({
          name: stayEntry["name"],
          address: stayEntry["address"],
          contact: stayEntry["contact"],
          rooms: returnRooms(stayEntry)
        }));
      });
      return tempObject.stays;
    }

    function returnRooms(stayEntry: IaPlaceStayModel): IaStayRoomModel[] {
      tempObject.rooms = [];
      stayEntry["rooms"].forEach((roomEntry: IaStayRoomModel) => {
        tempObject.rooms.push(new IaStayRoomModel({
          type: roomEntry["type"],
          cost: roomEntry["cost"]
        }));
      });
      return tempObject.rooms;
    }

    let userTrip = new IaTripModel({
      sourceCity: tripInitObject["sourceCity"],
      startDate: tripInitObject["startDate"],
      days: tempObject.days
    });

    this.trips.push(userTrip);
  }

  exportToJSON(tripModel: IaTripModel) {
    let tempTripObject = {};

    tempTripObject["tripInit"] = {};
    tempTripObject["tripInit"]["startDate"] = tripModel.trip.startDate;
    tempTripObject["tripInit"]["sourceCity"] = tripModel.trip.sourceCity;

    tempTripObject["days"] = [];

    let outputJSON = {};

    let tempObject = { days: [], places: [], attractions: [], stays: [], rooms: [] };

    tripModel.trip.days.forEach((dayEntry: IaTripDayModel) => {
      let tempDayObject = { day: { places: [] } };
      dayEntry.day.places.forEach((placeEntry: IaTripPlaceModel) => {
        let tempPlaceObject = { place: { name: "", attractions: [], stays: [] } };
        tempPlaceObject.place.name = placeEntry.place.name;

        placeEntry.place.attractions.forEach((attractionEntry: IaPlaceAttractionModel) => {
          let tempAttractionObject = { attraction: { name: "", description: "" } };
          tempAttractionObject.attraction.name = attractionEntry.attraction.name;
          tempAttractionObject.attraction.description = attractionEntry.attraction.description;
          tempObject.attractions.push(tempAttractionObject);
        });
        tempPlaceObject.place.attractions = tempObject.attractions;
        tempObject.attractions = [];

        placeEntry.place.stays.forEach((stayEntry: IaPlaceStayModel) => {
          let tempStayObject = { stay: { name: "", address: "", contact: "", rooms: [] } };
          tempStayObject.stay.name = stayEntry.stay.name;
          tempStayObject.stay.address = stayEntry.stay.address;
          tempStayObject.stay.contact = stayEntry.stay.contact;

          stayEntry.stay.rooms.forEach((roomEntry: IaStayRoomModel) => {
            let tempRoomObject = { room: { type: "", cost: 0 } };
            tempRoomObject.room.type = roomEntry.room.type;
            tempRoomObject.room.cost = roomEntry.room.cost;
            tempObject.rooms.push(tempRoomObject);
          });
          tempStayObject.stay.rooms = tempObject.rooms;
          tempObject.rooms = [];
          tempObject.stays.push(tempStayObject)

        });
        tempPlaceObject.place.stays = tempObject.stays;
        tempObject.stays = [];
        tempObject.places.push(tempPlaceObject);

      });
      tempDayObject.day.places = tempObject.places;
      tempObject.places = [];

      tempTripObject["days"].push(tempDayObject);
    });

    outputJSON = JSON.stringify(tempTripObject);
    return outputJSON;
  }

  importFromJSON(inputJSON: {}) {

  }

}

