import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-task-modify',
  templateUrl: './dialog-task-modify.component.html',
  styleUrl: './dialog-task-modify.component.css'
})
export class DialogTaskModifyComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private http: HttpClient) { }

  onSave(data: any) {
    this.http.put(`http://localhost:3000/task/${data.id}`, data).subscribe((d) => {
      console.log(d);
    });
  }


}
