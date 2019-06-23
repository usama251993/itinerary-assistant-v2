import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IaHomeComponent } from './ia-home/ia-home.component';
import { IaNewTripComponent } from './ia-new-trip/ia-new-trip.component';
import { IaEditTripComponent } from './ia-edit-trip/ia-edit-trip.component';
import { IaDesignTripComponent } from './ia-design-trip/ia-design-trip.component';
import { IaViewTripComponent } from './ia-view-trip/ia-view-trip.component';
import { IaViewRevisedComponent } from './ia-view-revised/ia-view-revised.component';
import { TripResolverService } from './shared/services/resolver/trip-resolver.service';
import { IaLoadTripFormComponent } from './ia-load-trip-form/ia-load-trip-form.component';
import { CanDeactivateGuardService } from './shared/services/guard/can-deactivate-guard.service';

const routes: Routes = [
  { path: "home", component: IaHomeComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "new", component: IaNewTripComponent, canDeactivate: [CanDeactivateGuardService] },
  { path: "load", component: IaLoadTripFormComponent },
  { path: "edit", component: IaEditTripComponent },
  { path: "design", component: IaDesignTripComponent },
  { path: "view", component: IaViewRevisedComponent, resolve: { tripData: TripResolverService } },
  // { path: "view", component: IaViewRevisedComponent },
  // { path: "view", component: IaViewTripComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
