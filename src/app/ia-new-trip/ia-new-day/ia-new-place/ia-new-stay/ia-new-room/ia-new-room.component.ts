import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { IaTripFormBuilderService } from 'src/app/shared/services/ia-trip/ia-trip-form-builder.service';

@Component({
  selector: 'app-ia-new-room',
  templateUrl: './ia-new-room.component.html',
  styleUrls: ['./ia-new-room.component.scss']
})
export class IaNewRoomComponent implements OnInit {

  @Input("roomFormGroup") roomFormGroup: FormGroup;
  @Input("roomIndex") roomIndex: { day: number, place: number, stay: number, room: number };

  roomOptions: { optionText: string, optionValue: string }[] = [];

  constructor(private tripFormBuilder: IaTripFormBuilderService) { }

  ngOnInit(): void {
    this.roomOptions = this.tripFormBuilder.roomOptions;
  }

  clearInput(control: FormControl): void {
    control.setValue("");
  }

  deleteRoom(indexObject: { day: number, place: number, stay: number, room: number }): void {
    this.tripFormBuilder.deleteRoom(indexObject.day, indexObject.place, indexObject.stay, indexObject.room);
  }
}
