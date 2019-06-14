import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-form-confirm-modal',
  templateUrl: './form-confirm-modal.component.html',
  styleUrls: ['./form-confirm-modal.component.scss']
})
export class FormConfirmModalComponent implements OnInit {

  constructor(public dialogReference: MatDialogRef<FormConfirmModalComponent>) { }

  ngOnInit() {
  }

}
