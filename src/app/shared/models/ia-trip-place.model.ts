import { IaPlaceStayModel } from './ia-place-stay.model';
import { IaPlaceAttractionModel } from './ia-place-attraction.model';

export class IaTripPlaceModel {

  // constructor(public placeName: string, public placeAttractions: IaPlaceAttractionModel[], public placeStays: IaPlaceStayModel[]) { }

  constructor(public place: {
    isSourcePlace?: boolean,
    name: string,
    attractions: IaPlaceAttractionModel[],
    stays: IaPlaceStayModel[]
  }) { }

}