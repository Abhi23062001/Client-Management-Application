import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-meeting-view',
  templateUrl: './dialog-meeting-view.component.html',
  styleUrl: './dialog-meeting-view.component.css'
})
export class DialogMeetingViewComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

}
