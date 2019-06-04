import { IaTripDayModel } from './ia-trip-day.model';

export class IaTripModel {

  // constructor(public tripID: number, public tripTitle: string, public tripDays: IaTripDayModel[]) { }

  constructor(public trip: {
    id: number,
    title: string,
    days: IaTripDayModel[]
  }) { }

}