import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user = {
    username: '',
    password: ''
  };
  constructor(private http: HttpClient) { }

  onSubmit() {
    // Send the registration request to the API
    this.http.post('http://localhost:3000/register', this.user)
      .subscribe(
        (response) => {
          console.log('Registration successful', response);
          alert("Registration successful");
          // Handle success response here
        },
        (error) => {
          console.error('Registration failed', error);
          // Handle error response here
        }
      );
  }
  
}

