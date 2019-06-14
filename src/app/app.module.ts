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
} from '@angular/material';

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
  ],
  imports: [
    BrowserModule,
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
    MatBottomSheetModule
  ],
  providers: [
    IaNavigationService,
    IaTripService,
  ],
  entryComponents: [
    FormConfirmDialogComponent,
    FormConfirmModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
