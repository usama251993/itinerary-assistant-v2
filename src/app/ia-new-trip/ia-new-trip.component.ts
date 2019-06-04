import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ia-trip',
  templateUrl: './ia-new-trip.component.html',
  styleUrls: ['./ia-new-trip.component.scss']
})
export class IaNewTripComponent implements OnInit {

  newTripForm: FormGroup = this.formBuilder.group({
    source: ["", [Validators.required]],
    destination: ["", [Validators.required]],
    startDate: ["", [Validators.required]],
    endDate: ["", [Validators.required]]
  });

  today: Date = new Date(Date.now());

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }

  clearInput(control: FormControl) {
    control.setValue("");
  }

  formSubmit() {
    this.router.navigate(["../" + "design"], { relativeTo: this.route });
  }

}
