import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  feedback: string = '';

  constructor(private http: HttpClient) {}

  sendMessage() {
    const formData = { name: this.name, email: this.email, message: this.message };

    this.http.post('https://formspree.io/f/mldgkwen', formData).subscribe(
      response => {
        this.feedback = 'Message sent successfully!';
        this.name = '';
        this.email = '';
        this.message = '';
      },
      error => {
        this.feedback = 'Error sending message. Please try again later.';
      }
    );
  }
}