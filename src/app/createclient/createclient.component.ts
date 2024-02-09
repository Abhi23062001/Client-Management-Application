import { Component } from '@angular/core';
import { Clients } from '../clients';
import { CreateclientService } from './createclient.service';

@Component({
  selector: 'app-createclient',
  templateUrl: './createclient.component.html',
  styleUrl: './createclient.component.css'
})
export class CreateClientComponent {
  client: Clients = { id: `${Math.floor(Math.random() * 200) + 1}`, clientId: '', name: '', email: '', phone: '', address: '' };
  clientList: Clients[] = [];

  constructor(private sendclient: CreateclientService) {

  }

  onSubmit(form: any) {
    if (form.valid) {
      this.sendclient.submitClient(this.client);
      // alert('New client added');
    }
  }
}

