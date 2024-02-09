import { Component, EventEmitter, Output } from '@angular/core';
import { ListtaskService } from './listtask.service';
import { Tasks } from '../tasks';
import { interval, switchMap } from 'rxjs';

@Component({
  selector: 'app-listtask',
  templateUrl: './listtask.component.html',
  styleUrl: './listtask.component.css'
})
export class ListtaskComponent {

  @Output() viewData = new EventEmitter<Tasks>();
  @Output() modifyData = new EventEmitter<Tasks>();
  @Output() deleteData = new EventEmitter<Tasks>();

  tasks: Tasks[] = []
  constructor(private taskData: ListtaskService) {
    taskData.getData().subscribe((data) => {
      this.tasks = data;
    });
  }
  ngOnInit(): void {
    interval(800) // Emit a value every 5 seconds
      .pipe(
        switchMap(() => this.taskData.getData()) // On each emission, switch to the data stream
      )
      .subscribe(newData => {
        this.tasks = newData;
        // Now do something with the new data, like updating the DOM
      });

  }

  sendProjectDetailsToProjectPage(data: Tasks) {
    this.viewData.emit(data);
  }

  sendProjectDetilsToModigy(data: Tasks) {
    this.modifyData.emit(data);
  }

  deleteProjectData(data: Tasks) {
    this.removeDocument(data);
    this.deleteData.emit(data);
  }

  removeDocument(doc: any) {
    this.tasks.forEach((item, index) => {
      if (item === doc) this.tasks.splice(index, 1);
    });
  }


}
