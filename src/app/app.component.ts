import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements DoCheck {

  title = 'examp';
  navbar1 = true;
  navbar2 = false;

  constructor(private router: Router) {

  }

  ngDoCheck(): void {
    let url = this.router.url;
    if (url === "/client" || url === "/project" || url === "/task" || url === "/meeting") {
      this.navbar1 = false;
      this.navbar2 = true;
    }
    if (url === "/login") {
      this.navbar1 = true;
      this.navbar2 = false;
    }
  }
}
