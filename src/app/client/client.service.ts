import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Clients } from '../clients';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  modifyClientData(data: Clients): Observable<any> {
    return this.http.put(`http://localhost:3000/client/${data.id}`, data);
  }

  deleteClientDetails(data: Clients): Observable<any> {
    return this.http.delete(`http://localhost:3000/client/${data.id}`);
  }
}
