import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import {
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatTabsModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatListModule,
  MatExpansionModule,
  MatTableModule,
  MatSortModule,
  MatSelectModule,
  MatStepperModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatBottomSheetModule,
  MatTooltipModule,
} from '@angular/material';
// import { MatFileUploadModule } from 'angular-material-fileupload';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IaHomeComponent } from './ia-home/ia-home.component';
import { IaHeaderComponent } from './ia-header/ia-header.component';
import { IaNewTripComponent } from './ia-new-trip/ia-new-trip.component';
import { IaNavigationService } from './shared/services/ia-navigation.service';
import { IaEditTripComponent } from './ia-edit-trip/ia-edit-trip.component';
import { IaDesignTripComponent } from './ia-design-trip/ia-design-trip.component';
import { IaTripService } from './shared/services/ia-trip.service';
import { IaViewTripComponent } from './ia-view-trip/ia-view-trip.component';
import { MaterialModule } from './shared/modules/material/material.module';
import { IaViewRevisedComponent } from './ia-view-revised/ia-view-revised.component';
import { IaOverviewComponent } from './ia-overview/ia-overview.component';
import { FormConfirmDialogComponent } from './shared/components/form-confirm-dialog/form-confirm-dialog.component';
import { FormConfirmModalComponent } from './shared/components/form-confirm-modal/form-confirm-modal.component';
import { IaNewDayComponent } from './ia-new-trip/ia-new-day/ia-new-day.component';
import { IaNewPlaceComponent } from './ia-new-trip/ia-new-day/ia-new-place/ia-new-place.component';
import { IaNewAttractionComponent } from './ia-new-trip/ia-new-day/ia-new-place/ia-new-attraction/ia-new-attraction.component';
import { IaNewStayComponent } from './ia-new-trip/ia-new-day/ia-new-place/ia-new-stay/ia-new-stay.component';
import { IaNewRoomComponent } from './ia-new-trip/ia-new-day/ia-new-place/ia-new-stay/ia-new-room/ia-new-room.component';
import { HttpClientModule } from '@angular/common/http';
import { TripResolverService } from './shared/services/resolver/trip-resolver.service';
import { IaLoadTripFormComponent } from './ia-load-trip-form/ia-load-trip-form.component';
import { CanDeactivateGuardService } from './shared/services/guard/can-deactivate-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    IaHomeComponent,
    IaHeaderComponent,
    IaNewTripComponent,
    IaEditTripComponent,
    IaDesignTripComponent,
    IaViewTripComponent,
    IaViewRevisedComponent,
    IaOverviewComponent,
    FormConfirmDialogComponent,
    FormConfirmModalComponent,
    IaNewDayComponent,
    IaNewPlaceComponent,
    IaNewAttractionComponent,
    IaNewStayComponent,
    IaNewRoomComponent,
    IaLoadTripFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    // MaterialModule
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    MatListModule,
    MatExpansionModule,
    MatTableModule,
    MatSortModule,
    MatSelectModule,
    MatStepperModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatBottomSheetModule,
    // MatFileUploadModule
    MatTooltipModule
  ],
  providers: [
    IaNavigationService,
    IaTripService,
    { provide: STEPPER_GLOBAL_OPTIONS, useValue: { showError: true } },
    TripResolverService,
    CanDeactivateGuardService
  ],
  entryComponents: [
    FormConfirmDialogComponent,
    FormConfirmModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
