import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogContentComponent } from '../dialog-content/dialog-content.component';
import { Clients } from '../clients';
import { HttpClient } from '@angular/common/http';
import { ClientService } from './client.service';
import { DialogModifyClientComponent } from '../dialog-modify-client/dialog-modify-client.component';



@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent {
  viewProject = true;

  setCreateProjectVisible() {
    this.viewProject = false;
  }
  setViewProjectVisible() {
    this.viewProject = true;

  }
  client: Clients = { id: '', clientId: '', name: '', email: '', phone: '', address: '' };

  constructor(public dialog: MatDialog, private http: HttpClient, private service: ClientService) { }


  reciveClientFromList(client: any) {
    this.dialog.open(DialogContentComponent, {
      data: client
    });
  }

  modifyClientData(details: Clients) {
    this.dialog.open(DialogModifyClientComponent, {
      data: details
    });
  }


  deletClientData(client: Clients) {
    this.service.deleteClientDetails(client).subscribe((data) => {
      console.log(data);
    });

  }
}
