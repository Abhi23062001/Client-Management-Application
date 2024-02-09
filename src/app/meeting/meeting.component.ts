import { Component } from '@angular/core';
import { MeetingService } from './meeting.service';
import { Meetings } from '../meetings';
import { DialogMeetingViewComponent } from '../dialog-meeting-view/dialog-meeting-view.component';
import { DialogMeetingModifyComponent } from '../dialog-meeting-modify/dialog-meeting-modify.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrl: './meeting.component.css'
})
export class MeetingComponent {


  viewProject = true;
  constructor(private sevice: MeetingService, public dialog: MatDialog) { }

  viewProjecDetails(t: any) {
    this.dialog.open(DialogMeetingViewComponent, {
      data: t
    });
  }

  modifyProjectDetils(t: any) {
    this.dialog.open(DialogMeetingModifyComponent, {
      data: t
    });
  }

  deleteProject(m: Meetings) {
    this.sevice.deletData(m).subscribe((data) => {
      console.log(data);
    })
  }

  setViewProjectVisible() {
    this.viewProject = true;
  }

  setCreateProjectVisible() {
    this.viewProject = false;
  }

}
