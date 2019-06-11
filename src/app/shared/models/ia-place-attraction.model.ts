export class IaPlaceAttractionModel {

  // constructor(public attractionName: string, public attractionType: string) { }

  constructor(public attraction: {
    name: string,
    description?: string
  }) { }

}