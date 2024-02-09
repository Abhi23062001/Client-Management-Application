import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-meeting-modify',
  templateUrl: './dialog-meeting-modify.component.html',
  styleUrl: './dialog-meeting-modify.component.css'
})
export class DialogMeetingModifyComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private http: HttpClient) { }

  onSave(data: any) {
    this.http.put(`http://localhost:3000/meeting/${data.id}`, data).subscribe((d) => {
      console.log(d);
    });
  }


}
