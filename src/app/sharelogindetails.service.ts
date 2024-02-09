import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharelogindetailsService {

  private isLoggedIn = false;

  constructor() { }

  setIsLoggedIn() {
    this.isLoggedIn = true;
  }

  getIsLoggedIn() {
    return this.isLoggedIn;
  }
}
