import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Projects } from '../projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  deletData(p: Projects): Observable<any> {
    return this.http.delete(`http://localhost:3000/project/${p.id}`);
  }
}
