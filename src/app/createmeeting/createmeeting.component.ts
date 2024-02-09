import { Component, OnInit } from '@angular/core';
import { CreatemeetinService } from './createmeetin.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Clients } from '../clients';

@Component({
  selector: 'app-createmeeting',
  templateUrl: './createmeeting.component.html',
  styleUrl: './createmeeting.component.css'
})
export class CreatemeetingComponent implements OnInit {

  meetingForm = new FormGroup({
    id: new FormControl(`${Math.floor((Math.random() * 300) + 1)}`, Validators.required),
    meetingId: new FormControl('', Validators.required),
    clientId: new FormControl('', Validators.required),
    totalNumberOfPerson: new FormControl('', Validators.required),
    dateTime: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
  });




  clients: Clients[] = [

  ];

  constructor(private service: CreatemeetinService) {

  }


  ngOnInit(): void {
    this.service.getClientData().subscribe((data) => {
      this.clients = data;
    })
  }

  onSubmit(): void {
    if (this.meetingForm.valid) {
      this.service.submitProjectData(this.meetingForm.value).subscribe((data) => {
        console.log(data);
      });
      // console.log(this.projectForm.value);
      alert('Meeting Created');
    } else {
      console.log('Form is not valid');
    }
  }


}
