import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { IaTripService } from '../shared/services/ia-trip.service';
import { IaTripModel } from '../shared/models/ia-trip.model';

@Component({
  selector: 'app-ia-view-revised',
  templateUrl: './ia-view-revised.component.html',
  styleUrls: ['./ia-view-revised.component.scss']
})
export class IaViewRevisedComponent implements OnInit {

  @ViewChild("downloadButton") anchorRef: ElementRef;

  trips: IaTripModel[] = [];
  displayedColumns: string[] = [];
  export: { fileURI: any, fileName: string } = { fileURI: {}, fileName: "trip " + new Date(Date.now()).toISOString() + ".json" };

  constructor(private tripService: IaTripService,
    private domSanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.trips = this.tripService.trips;
    this.displayedColumns = this.tripService.displayedColumns;
    this.displayedColumns.splice(-1);
  }

  exportTrip(tripModel: IaTripModel) {
    let stringifiedJSON = this.tripService.exportToJSON(tripModel);
    this.generateJSONURI(stringifiedJSON);
  }

  generateJSONURI(stringifiedJSON: any) {
    var objectURI = this.domSanitizer.bypassSecurityTrustUrl("data:text/json;charset=UTF-8," + encodeURIComponent(stringifiedJSON));
    this.export.fileURI = objectURI;
    this.triggerDownload();
  }

  triggerDownload() {
    (this.anchorRef.nativeElement as HTMLAnchorElement).click();
  }

}
