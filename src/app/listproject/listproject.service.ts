import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Projects } from '../projects';

@Injectable({
  providedIn: 'root'
})
export class ListprojectService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get('http://localhost:3000/project');
  }
}
