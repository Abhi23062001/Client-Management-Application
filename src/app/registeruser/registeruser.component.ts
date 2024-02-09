import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { RegisteruserService } from './registeruser.service';
import { Router } from '@angular/router';
import { SharelogindetailsService } from '../sharelogindetails.service';

@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrl: './registeruser.component.css'
})
export class RegisteruserComponent implements OnInit {

  confirmPassword = "";

  userList: User[] = []
  userDetails: User = {
    id: 0,
    name: "",
    email: "",
    phone: "",
    password: ""
  }

  constructor(private register: RegisteruserService, private router: Router, public isLogIn: SharelogindetailsService) {

  }
  ngOnInit(): void {
    this.register.getUserDetails().subscribe((data) => {
      this.userList = data;
    });
  }

  sendUserDetails(): void {
    if ((this.userDetails.password !== this.confirmPassword) || !this.userDetails.password || !this.confirmPassword || !this.userDetails.name || !this.userDetails.email || !this.userDetails.phone) {
      return;
    }
    this.isLogIn.setIsLoggedIn();
    this.register.sendDetails(this.userDetails).subscribe((data) => {
      this.userList = data;
    });
    alert('Regestered Successfully');
    this.router.navigate(['/client']);
  }


}
