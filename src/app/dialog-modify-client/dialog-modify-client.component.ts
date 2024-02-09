import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Clients } from '../clients';
import { Data } from '@angular/router';

@Component({
  selector: 'app-dialog-modify-client',
  templateUrl: './dialog-modify-client.component.html',
  styleUrl: './dialog-modify-client.component.css'
})
export class DialogModifyClientComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private http: HttpClient) { }


  onSave(data: any) {
    this.http.put(`http://localhost:3000/client/${data.id}`, data).subscribe((d) => {
      console.log(d);
    });
  }

}
