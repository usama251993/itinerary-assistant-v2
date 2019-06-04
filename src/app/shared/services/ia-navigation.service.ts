import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class IaNavigationService {

  constructor(private router: Router) { }

  goTo(destination: string, route: ActivatedRoute) {
    this.router.navigate(["../" + destination], { relativeTo: route });
  }

}
