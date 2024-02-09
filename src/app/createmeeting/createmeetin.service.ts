import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreatemeetinService {

  constructor(private clientData: HttpClient) { }

  getClientData(): Observable<any> {
    return this.clientData.get('http://localhost:3000/client');
  }

  submitProjectData(meetingData: any): Observable<any> {
    return this.clientData.post('http://localhost:3000/meeting', meetingData);
  }
}
