import { Component, OnInit } from '@angular/core';

import { IaTripModel } from '../shared/models/ia-trip.model';
import { IaTripService } from '../shared/services/ia-trip.service';
import { IaStayRoomModel } from '../shared/models/ia-stay-room.model';

export interface HotelRoom {
  roomType: string;
  roomCost: number;
}

@Component({
  selector: 'app-ia-view-trip',
  templateUrl: './ia-view-trip.component.html',
  styleUrls: ['./ia-view-trip.component.scss']
})

export class IaViewTripComponent implements OnInit {

  trips: IaTripModel[] = []

  displayedColumns: string[] = ["type", "cost"];

  constructor(private tripService: IaTripService) { }

  ngOnInit(): void {
    this.trips = this.tripService.trips;
  }

}