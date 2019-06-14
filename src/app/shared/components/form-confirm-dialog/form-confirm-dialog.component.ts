import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';

@Component({
  selector: 'app-form-confirm-dialog',
  templateUrl: './form-confirm-dialog.component.html',
  styleUrls: ['./form-confirm-dialog.component.scss']
})
export class FormConfirmDialogComponent implements OnInit {

  constructor(public dialogReference: MatBottomSheetRef<FormConfirmDialogComponent>) { }

  ngOnInit() {
  }

}
