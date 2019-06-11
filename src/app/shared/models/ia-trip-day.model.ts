import { IaTripPlaceModel } from './ia-trip-place.model';
import { IaTripTransitModel } from './ia-trip-transit.model';

export class IaTripDayModel {
  // constructor(public dayPlaces: IaTripPlaceModel[], public dayTransit: IaTripTransitModel) { }

  constructor(public day: {
    isTerminalDay?: boolean,
    places: IaTripPlaceModel[],
    transit: IaTripTransitModel[]
  }) { }

}