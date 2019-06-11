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

  trips: IaTripModel[] = [
    new IaTripModel({
      id: 0,
      sourceCity: "Mumbai",
      startDate: new Date(Date.now()),
      isOneDayTrip: false,
      title: "North East",
      days: [
        new IaTripDayModel({
          isTerminalDay: true,
          places: [
            new IaTripPlaceModel({
              name: "Guwahati",
              attractions: [
                new IaPlaceAttractionModel({
                  name: "State Museum"
                }),
                new IaPlaceAttractionModel({
                  name: "Garden"
                })
              ],
              stays: [
                new IaPlaceStayModel({
                  name: "Hotel Sunset View",
                  address: "Main Road",
                  contact: 8097728350,
                  rooms: [
                    new IaStayRoomModel({
                      type: "Twin Sharing",
                      cost: 2000
                    }),
                    new IaStayRoomModel({
                      type: "Four in 1",
                      cost: 5000
                    })
                  ]
                }),
                new IaPlaceStayModel({
                  name: "Hotel Valley View",
                  address: "Tawang Road",
                  contact: 9819887617,
                  rooms: [
                    new IaStayRoomModel({
                      type: "Twin Sharing",
                      cost: 2500
                    }),
                    new IaStayRoomModel({
                      type: "Four in 1",
                      cost: 7000
                    })
                  ]
                })
              ]
            })
          ],
          transit: [
            new IaTripTransitModel({
              mode: "Xylo",
              cost: 5000
            }),
            new IaTripTransitModel({
              mode: "Royal Enfield",
              cost: 3000
            })
          ]
        }),
        new IaTripDayModel({
          places: [
            new IaTripPlaceModel({
              name: "Guwahati",
              attractions: [
                new IaPlaceAttractionModel({
                  name: "State Museum"
                }),
                new IaPlaceAttractionModel({
                  name: "Garden"
                })
              ],
              stays: [
                new IaPlaceStayModel({
                  name: "Hotel Sunset View",
                  address: "Main Road",
                  contact: 8097728350,
                  rooms: [
                    new IaStayRoomModel({
                      type: "Twin Sharing",
                      cost: 2000
                    }),
                    new IaStayRoomModel({
                      type: "Four in 1",
                      cost: 5000
                    })
                  ]
                }),
                new IaPlaceStayModel({
                  name: "Hotel Valley View",
                  address: "Tawang Road",
                  contact: 9819887617,
                  rooms: [
                    new IaStayRoomModel({
                      type: "Twin Sharing",
                      cost: 2500
                    }),
                    new IaStayRoomModel({
                      type: "Four in 1",
                      cost: 7000
                    })
                  ]
                })
              ]
            }),
            new IaTripPlaceModel({
              name: "Tawang",
              attractions: [
                new IaPlaceAttractionModel({
                  name: "Monastery"
                }),
                new IaPlaceAttractionModel({
                  name: "Bum La Pass"
                })
              ],
              stays: [
                new IaPlaceStayModel({
                  name: "Hotel Monastery View",
                  address: "Monastery Road",
                  contact: 9022237199,
                  rooms: [
                    new IaStayRoomModel({
                      type: "Twin Sharing",
                      cost: 1500
                    }),
                    new IaStayRoomModel({
                      type: "Four in 1",
                      cost: 3000
                    })
                  ]
                }),
                new IaPlaceStayModel({
                  name: "Hotel Pass View",
                  address: "Bum La Pass Road",
                  contact: 8087378899,
                  rooms: [
                    new IaStayRoomModel({
                      type: "Twin Sharing",
                      cost: 2000
                    }),
                    new IaStayRoomModel({
                      type: "Four in 1",
                      cost: 4000
                    })
                  ]
                })
              ]
            })
          ],
          transit: [
            new IaTripTransitModel({
              mode: "Xylo",
              cost: 5000
            }),
            new IaTripTransitModel({
              mode: "Royal Enfield",
              cost: 3000
            })
          ]
        }),
        new IaTripDayModel({
          places: [
            new IaTripPlaceModel({
              name: "Tawang",
              attractions: [
                new IaPlaceAttractionModel({
                  name: "State Museum"
                }),
                new IaPlaceAttractionModel({
                  name: "Garden"
                })
              ],
              stays: [
                new IaPlaceStayModel({
                  name: "Hotel Sunset View",
                  address: "Main Road",
                  contact: 8097728350,
                  rooms: [
                    new IaStayRoomModel({
                      type: "Twin Sharing",
                      cost: 2000
                    }),
                    new IaStayRoomModel({
                      type: "Four in 1",
                      cost: 5000
                    })
                  ]
                }),
                new IaPlaceStayModel({
                  name: "Hotel Valley View",
                  address: "Tawang Road",
                  contact: 9819887617,
                  rooms: [
                    new IaStayRoomModel({
                      type: "Twin Sharing",
                      cost: 2500
                    }),
                    new IaStayRoomModel({
                      type: "Four in 1",
                      cost: 7000
                    })
                  ]
                })
              ]
            }),
            new IaTripPlaceModel({
              name: "Itanagar",
              attractions: [
                new IaPlaceAttractionModel({
                  name: "Ziro Valley"
                }),
                new IaPlaceAttractionModel({
                  name: "Majuli Island"
                })
              ],
              stays: [
                new IaPlaceStayModel({
                  name: "Hotel Ziro Grand",
                  address: "Mall Road",
                  contact: 7387818160,
                  rooms: [
                    new IaStayRoomModel({
                      type: "Twin Sharing",
                      cost: 2000
                    }),
                    new IaStayRoomModel({
                      type: "Four in 1",
                      cost: 5000
                    })
                  ]
                }),
                new IaPlaceStayModel({
                  name: "Itanagar Dormitories",
                  address: "Central Road",
                  contact: 8898842226,
                  rooms: [
                    new IaStayRoomModel({
                      type: "Twin Sharing",
                      cost: 4500
                    }),
                    new IaStayRoomModel({
                      type: "Four in 1",
                      cost: 8000
                    })
                  ]
                })
              ]
            }),
          ],
          transit: [
            new IaTripTransitModel({
              mode: "Xylo",
              cost: 5000
            }),
            new IaTripTransitModel({
              mode: "Royal Enfield",
              cost: 3000
            })
          ]
        }),
        new IaTripDayModel({
          places: [
            new IaTripPlaceModel({
              name: "Itanagar",
              attractions: [
                new IaPlaceAttractionModel({
                  name: "Ziro Valley"
                }),
                new IaPlaceAttractionModel({
                  name: "Majuli Island"
                })
              ],
              stays: [
                new IaPlaceStayModel({
                  name: "Hotel Ziro Grand",
                  address: "Mall Road",
                  contact: 7387818160,
                  rooms: [
                    new IaStayRoomModel({
                      type: "Twin Sharing",
                      cost: 2000
                    }),
                    new IaStayRoomModel({
                      type: "Four in 1",
                      cost: 5000
                    })
                  ]
                }),
                new IaPlaceStayModel({
                  name: "Itanagar Dormitories",
                  address: "Central Road",
                  contact: 8898842226,
                  rooms: [
                    new IaStayRoomModel({
                      type: "Twin Sharing",
                      cost: 4500
                    }),
                    new IaStayRoomModel({
                      type: "Four in 1",
                      cost: 8000
                    })
                  ]
                })
              ]
            }),
            new IaTripPlaceModel({
              name: "Shillong",
              attractions: [
                new IaPlaceAttractionModel({
                  name: "Cherrapunjee"
                }),
                new IaPlaceAttractionModel({
                  name: "Mawsynram"
                })
              ],
              stays: [
                new IaPlaceStayModel({
                  name: "Hotel Waterfall View",
                  address: "Waterfall Road",
                  contact: 8446330021,
                  rooms: [
                    new IaStayRoomModel({
                      type: "Twin Sharing",
                      cost: 2000
                    }),
                    new IaStayRoomModel({
                      type: "Four in 1",
                      cost: 4000
                    })
                  ]
                }),
                new IaPlaceStayModel({
                  name: "Hotel Lake View",
                  address: "Umaim Lake Road",
                  contact: 9769325528,
                  rooms: [
                    new IaStayRoomModel({
                      type: "Twin Sharing",
                      cost: 3000
                    }),
                    new IaStayRoomModel({
                      type: "Four in 1",
                      cost: 7000
                    })
                  ]
                })
              ]
            })
          ],
          transit: [
            new IaTripTransitModel({
              mode: "Xylo",
              cost: 5000
            }),
            new IaTripTransitModel({
              mode: "Royal Enfield",
              cost: 3000
            })
          ]
        }),
        new IaTripDayModel({
          isTerminalDay: false,
          places: [
            new IaTripPlaceModel({
              name: "Shillong",
              attractions: [
                new IaPlaceAttractionModel({
                  name: "Cherrapunjee"
                }),
                new IaPlaceAttractionModel({
                  name: "Mawsynram"
                })
              ],
              stays: [
                new IaPlaceStayModel({
                  name: "Hotel Waterfall View",
                  address: "Waterfall Road",
                  contact: 8446330021,
                  rooms: [
                    new IaStayRoomModel({
                      type: "Twin Sharing",
                      cost: 2000
                    }),
                    new IaStayRoomModel({
                      type: "Four in 1",
                      cost: 4000
                    })
                  ]
                }),
                new IaPlaceStayModel({
                  name: "Hotel Lake View",
                  address: "Umaim Lake Road",
                  contact: 9769325528,
                  rooms: [
                    new IaStayRoomModel({
                      type: "Twin Sharing",
                      cost: 3000
                    }),
                    new IaStayRoomModel({
                      type: "Four in 1",
                      cost: 7000
                    })
                  ]
                })
              ]
            })
          ],
          transit: [
            new IaTripTransitModel({
              mode: "Xylo",
              cost: 5000
            }),
            new IaTripTransitModel({
              mode: "Royal Enfield",
              cost: 3000
            })
          ]
        })
      ]
    })
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

  }

}
