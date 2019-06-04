import { Component, OnInit } from '@angular/core';
import { IaTripService } from '../shared/services/ia-trip.service';

@Component({
  selector: 'app-ia-design-trip',
  templateUrl: './ia-design-trip.component.html',
  styleUrls: ['./ia-design-trip.component.scss']
})
export class IaDesignTripComponent implements OnInit {

  constructor(private tripService: IaTripService) { }

  ngOnInit() {
  }

}
