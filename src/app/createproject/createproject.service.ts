import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Projects } from '../projects';

@Injectable({
  providedIn: 'root'
})
export class CreateprojectService {

  constructor(private clientData: HttpClient) { }

  getClientData(): Observable<any> {
    return this.clientData.get('http://localhost:3000/client');
  }

  submitProjectData(projectData: any): Observable<any> {
    return this.clientData.post('http://localhost:3000/project', projectData);
  }
}
