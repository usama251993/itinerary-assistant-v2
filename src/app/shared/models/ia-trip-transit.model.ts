export class IaTripTransitModel {

  // constructor(public transitVehicle: string, public transitCost: number) { }

  constructor(public transit: {
    mode: string,
    cost: number
  }) { }

}