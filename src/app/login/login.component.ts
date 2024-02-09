import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { User } from '../user';
import { Router } from '@angular/router';
import { SharelogindetailsService } from '../sharelogindetails.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  showRegister = false;
  user = { username: '', password: '' };

  registerdUsername = false;
  registerdPassword = false;

  userDetails: User[] = [];

  constructor(private userData: LoginService, private router: Router, public isLogIn: SharelogindetailsService) {

  }

  ngOnInit(): void {
    this.userData.getUserDetails().subscribe((data) => {
      this.userDetails = data;
    })
  }

  onLogin(form: any) {
    for (let i = 0; i < this.userDetails.length; i++) {
      if (this.userDetails[i].name === this.user.username) {
        this.registerdUsername = true;
      }
      if (this.userDetails[i].password === this.user.password) {
        this.registerdPassword = true;
      }
    }
    if (this.registerdUsername && this.registerdPassword && form.valid) {
      this.isLogIn.setIsLoggedIn();
      alert('login successful');
      this.registerdUsername = false;
      this.registerdPassword = false;
      this.router.navigate(['/client']);
    }
    else {
      alert('Invalid Username or password');
    }
  }

  openRegister() {
    this.showRegister = true;
  }
}
