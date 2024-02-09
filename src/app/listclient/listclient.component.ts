import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { Clients } from '../clients';
import { ListclientService } from './listclient.service';
import { interval, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listclient',
  templateUrl: './listclient.component.html',
  styleUrl: './listclient.component.css'
})
export class ListclientComponent implements OnInit {
  @Output() myEvent = new EventEmitter<Clients>();
  @Output() modifyData = new EventEmitter<Clients>();
  @Output() deleteData = new EventEmitter<Clients>();

  clients: Clients[] = []
  constructor(private clientData: ListclientService, private http: HttpClient) {
    clientData.getData().subscribe((data) => {
      this.clients = data;
    });
  }
  ngOnInit(): void {
    interval(800) // Emit a value every 5 seconds
      .pipe(
        switchMap(() => this.clientData.getData()) // On each emission, switch to the data stream
      )
      .subscribe(newData => {
        this.clients = newData;
        // Now do something with the new data, like updating the DOM
      });

  }

  sendClientDetailsToClientPage(client: Clients) {
    this.myEvent.emit(client);
  }

  sendClientDetilsToModigy(client: Clients) {
    this.modifyData.emit(client);
  }

  deleteClientData(client: Clients) {
    this.deleteData.emit(client);
  }


}
