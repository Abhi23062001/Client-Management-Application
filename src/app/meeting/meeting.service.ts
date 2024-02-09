import { Injectable } from '@angular/core';
import { Meetings } from '../meetings';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {

  constructor(private http: HttpClient) { }

  deletData(m: Meetings): Observable<any> {
    return this.http.delete(`http://localhost:3000/meeting/${m.id}`);
  }
}
