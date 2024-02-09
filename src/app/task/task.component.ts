import { Component } from '@angular/core';
import { TaskService } from './task.service';
import { DialogTaskViewComponent } from '../dialog-task-view/dialog-task-view.component';
import { DialogTaskModifyComponent } from '../dialog-task-modify/dialog-task-modify.component';
import { Tasks } from '../tasks';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  viewProject = true;
  constructor(private sevice: TaskService, public dialog: MatDialog) { }

  viewProjecDetails(t: any) {
    this.dialog.open(DialogTaskViewComponent, {
      data: t
    });
  }

  modifyProjectDetils(t: any) {
    this.dialog.open(DialogTaskModifyComponent, {
      data: t
    });
  }

  deleteProject(t: Tasks) {
    this.sevice.deletData(t).subscribe((data) => {
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
