import { Component, EventEmitter, Output } from '@angular/core';
import { ListmeetingService } from './listmeeting.service';
import { Meetings } from '../meetings';
import { interval, switchMap } from 'rxjs';

@Component({
  selector: 'app-listmeeting',
  templateUrl: './listmeeting.component.html',
  styleUrl: './listmeeting.component.css'
})
export class ListmeetingComponent {


  @Output() viewData = new EventEmitter<Meetings>();
  @Output() modifyData = new EventEmitter<Meetings>();
  @Output() deleteData = new EventEmitter<Meetings>();

  meetings: Meetings[] = []
  constructor(private meetingData: ListmeetingService) {
    meetingData.getData().subscribe((data) => {
      this.meetings = data;
    });
  }
  ngOnInit(): void {
    interval(800) // Emit a value every 5 seconds
      .pipe(
        switchMap(() => this.meetingData.getData()) // On each emission, switch to the data stream
      )
      .subscribe(newData => {
        this.meetings = newData;
        // Now do something with the new data, like updating the DOM
      });

  }

  sendProjectDetailsToProjectPage(data: Meetings) {
    this.viewData.emit(data);
  }

  sendProjectDetilsToModigy(data: Meetings) {
    this.modifyData.emit(data);
  }

  deleteProjectData(data: Meetings) {
    this.removeDocument(data);
    this.deleteData.emit(data);
  }

  removeDocument(doc: any) {
    this.meetings.forEach((item, index) => {
      if (item === doc) this.meetings.splice(index, 1);
    });
  }

}
