import { Injectable } from '@angular/core';
import { IaTripService } from '../ia-trip.service';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TripResolverService implements Resolve<{}> {

  constructor(private tripService: IaTripService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log(route);
    console.log(state);
    // console.log(this.tripService.newTrip);
    // return "";
    return this.tripService.getTrip();
    // return this.tripService.loadTrip();
  }

}
