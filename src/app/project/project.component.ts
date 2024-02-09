import { Component } from '@angular/core';
import { ProjectService } from './project.service';
import { Projects } from '../projects';
import { DialogContentComponent } from '../dialog-content/dialog-content.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogContentProjectComponent } from '../dialog-content-project/dialog-content-project.component';
import { ProjectModifyDialogComponent } from '../project-modify-dialog/project-modify-dialog.component';

@Component({
  selector: 'app-modal',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  viewProject = true;
  constructor(private sevice: ProjectService, public dialog: MatDialog) { }

  viewProjecDetails(p: any) {
    this.dialog.open(DialogContentProjectComponent, {
      data: p
    });
  }

  modifyProjectDetils(p: any) {
    this.dialog.open(ProjectModifyDialogComponent, {
      data: p
    });
  }

  deleteProject(p: Projects) {
    this.sevice.deletData(p).subscribe((data) => {
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
