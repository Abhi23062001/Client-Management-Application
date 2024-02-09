import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-project-modify-dialog',
  templateUrl: './project-modify-dialog.component.html',
  styleUrl: './project-modify-dialog.component.css'
})
export class ProjectModifyDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private http: HttpClient) { }

  onSave(data: any) {
    this.http.put(`http://localhost:3000/project/${data.id}`, data).subscribe((d) => {
      console.log(d);
    });
  }

}
