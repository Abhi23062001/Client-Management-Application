import { Component } from '@angular/core';
import { CreatetaskService } from './createtask.service';
import { Tasks } from '../tasks';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Projects } from '../projects';

@Component({
  selector: 'app-createtask',
  templateUrl: './createtask.component.html',
  styleUrl: './createtask.component.css'
})
export class CreatetaskComponent {

  projectForm = new FormGroup({
    id: new FormControl(`${Math.floor((Math.random() * 300) + 1)}`, Validators.required),
    taskId: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    discription: new FormControl('', Validators.required),
    startDate: new FormControl('', Validators.required),
    endDate: new FormControl('', Validators.required),
    projectId: new FormControl('', Validators.required),
  });




  projects: Projects[] = [

  ];

  constructor(private service: CreatetaskService) {

  }


  ngOnInit(): void {
    this.service.getProjectData().subscribe((data) => {
      this.projects = data;
    })
  }

  onSubmit(): void {
    if (this.projectForm.valid) {
      this.service.submitTaskData(this.projectForm.value).subscribe((data) => {
        console.log(data);
      });
      // console.log(this.projectForm.value);
      alert('Task Created');
    } else {
      console.log('Form is not valid');
    }
  }

}
