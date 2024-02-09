import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  user = { name: '', email: '', message: '' };

  onSubmit(form: any) {
    if (form.valid) {
      // Handle successful form submission here
      console.log(this.user);
      alert('Submitted successfully');
    }
  }
}
