import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-content-project',
  templateUrl: './dialog-content-project.component.html',
  styleUrl: './dialog-content-project.component.css'
})
export class DialogContentProjectComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }


}
