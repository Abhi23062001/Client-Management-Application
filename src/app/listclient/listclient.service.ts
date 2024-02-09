import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Clients } from '../clients';

@Injectable({
  providedIn: 'root'
})
export class ListclientService {

  constructor(private http: HttpClient) {

  }

  getData(): Observable<Clients[]> {
    return this.http.get<Clients[]>('http://localhost:3000/client');
  }
}
