import { IaStayRoomModel } from './ia-stay-room.model';

export class IaPlaceStayModel {

  // constructor(public stayName: string, public stayAddress: string, public stayContact: number, public stayRooms: IaStayRoomModel[]) { }

  constructor(public stay: {
    name: string,
    address: string,
    contact: string,
    rooms: IaStayRoomModel[]
  }) { }

}