export class IaStayRoomModel {

  // constructor(public roomType: string, public roomCost: number) { }

  constructor(public room: {
    type: string,
    cost: number
  }) { }

}