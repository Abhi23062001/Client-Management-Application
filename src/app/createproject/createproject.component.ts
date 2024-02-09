import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Clients } from '../clients';

import { CreateprojectService } from './createproject.service';


@Component({
  selector: 'app-createproject',
  templateUrl: './createproject.component.html',
  styleUrl: './createproject.component.css'
})


export class CreateprojectComponent implements OnInit {
  projectForm = new FormGroup({
    id: new FormControl(`${Math.floor((Math.random() * 300) + 1)}`, Validators.required),
    projectId: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    discription: new FormControl('', Validators.required),
    startDate: new FormControl('', Validators.required),
    endDate: new FormControl('', Validators.required),
    clientId: new FormControl('', Validators.required),
  });




  clients: Clients[] = [

  ];

  constructor(private service: CreateprojectService) {

  }


  ngOnInit(): void {
    this.service.getClientData().subscribe((data) => {
      this.clients = data;
    })
  }

  onSubmit(): void {
    if (this.projectForm.valid) {
      this.service.submitProjectData(this.projectForm.value).subscribe((data) => {
        console.log(data);
      });
      console.log(this.projectForm.value);
      alert('Project Created');
    } else {
      console.log('Form is not valid');
    }
  }


}
