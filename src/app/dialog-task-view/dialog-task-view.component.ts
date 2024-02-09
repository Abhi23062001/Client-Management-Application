import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-task-view',
  templateUrl: './dialog-task-view.component.html',
  styleUrl: './dialog-task-view.component.css'
})
export class DialogTaskViewComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

}
