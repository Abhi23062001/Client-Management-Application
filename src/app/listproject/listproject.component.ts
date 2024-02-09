import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Projects } from '../projects';
import { interval, switchMap } from 'rxjs';
import { ListprojectService } from './listproject.service';

@Component({
  selector: 'app-listproject',
  templateUrl: './listproject.component.html',
  styleUrl: './listproject.component.css'
})
export class ListprojectComponent implements OnInit {

  @Output() myEvent = new EventEmitter<Projects>();
  @Output() modifyData = new EventEmitter<Projects>();
  @Output() deleteData = new EventEmitter<Projects>();

  projects: Projects[] = []
  constructor(private projectData: ListprojectService) {
    projectData.getData().subscribe((data) => {
      this.projects = data;
    });
  }
  ngOnInit(): void {
    interval(900) // Emit a value every 5 seconds
      .pipe(
        switchMap(() => this.projectData.getData()) // On each emission, switch to the data stream
      )
      .subscribe(newData => {
        this.projects = newData;
        // Now do something with the new data, like updating the DOM
      });

  }

  sendProjectDetailsToProjectPage(data: Projects) {
    this.myEvent.emit(data);
  }

  sendProjectDetilsToModigy(data: Projects) {
    this.modifyData.emit(data);
  }

  deleteProjectData(data: Projects) {
    this.removeDocument(data);
    this.deleteData.emit(data);
  }

  removeDocument(doc: any) {
    this.projects.forEach((item, index) => {
      if (item === doc) this.projects.splice(index, 1);
    });
  }

}
