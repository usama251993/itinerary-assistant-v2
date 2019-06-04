import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IaHomeComponent } from './ia-home/ia-home.component';
import { IaNewTripComponent } from './ia-new-trip/ia-new-trip.component';
import { IaEditTripComponent } from './ia-edit-trip/ia-edit-trip.component';
import { IaDesignTripComponent } from './ia-design-trip/ia-design-trip.component';
import { IaViewTripComponent } from './ia-view-trip/ia-view-trip.component';

const routes: Routes = [
  { path: "home", component: IaHomeComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "new", component: IaNewTripComponent },
  { path: "edit", component: IaEditTripComponent },
  { path: "design", component: IaDesignTripComponent },
  { path: "view", component: IaViewTripComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
