import { Injectable } from '@angular/core';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisteruserService {

  constructor(private http: HttpClient) {

  }

  getUserDetails() {
    return this.http.get<User[]>('http://localhost:3000/user');
  }
  sendDetails(deatils: User) {
    return this.http.post<User[]>('http://localhost:3000/user', deatils);
  }

}
