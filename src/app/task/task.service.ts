import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tasks } from '../tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  deletData(t: Tasks): Observable<any> {
    return this.http.delete(`http://localhost:3000/task/${t.id}`);
  }

}
