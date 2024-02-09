import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Clients } from '../clients';

@Injectable({
  providedIn: 'root'
})
export class CreateclientService {

  clientList: Clients[] = [];

  constructor(private http: HttpClient) {
    this.getClientData();
  }

  submitClient(client: Clients) {
    this.http.post<Clients>('http://localhost:3000/client', client).subscribe(data => {
      this.clientList.push(data);
      console.log('afterpushing:', this.clientList);
    });

  }

  getClientData() {
    this.http.get<Clients[]>('http://localhost:3000/client').subscribe((data) => {
      this.clientList = data;
      console.log('before pushing : ', this.clientList);
    });
  }

  shareClientData() {
    return this.http.get<Clients[]>('http://localhost:3000/client');
  }

}
