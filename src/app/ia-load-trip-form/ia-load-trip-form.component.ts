import { Component, OnInit } from '@angular/core';
import { IaTripFormBuilderService } from '../shared/services/ia-trip/ia-trip-form-builder.service';
import { FormGroup } from '@angular/forms';
import { IaTripService } from '../shared/services/ia-trip.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ia-load-trip-form',
  templateUrl: './ia-load-trip-form.component.html',
  styleUrls: ['./ia-load-trip-form.component.scss']
})
export class IaLoadTripFormComponent implements OnInit {

  loadTripForm: FormGroup;
  fileReader: FileReader = new FileReader();
  inputFile: File = null;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private tripFormBuilder: IaTripFormBuilderService,
    private tripService: IaTripService) { }

  ngOnInit() {
    this.loadTripForm = this.tripFormBuilder.loadTripForm;
  }

  formSubmit() {
    this.router.navigate(["../" + "view"], { relativeTo: this.route });
  }

  handleFiles(eventData: Event) {
    this.inputFile = eventData.target["files"][0];
    this.tripService.importFromJSON(this.inputFile);
  }

}
