import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreatetaskService {

  constructor(private clientData: HttpClient) { }

  getProjectData(): Observable<any> {
    return this.clientData.get('http://localhost:3000/project');
  }

  submitTaskData(projectData: any): Observable<any> {
    return this.clientData.post('http://localhost:3000/task', projectData);
  }
}
