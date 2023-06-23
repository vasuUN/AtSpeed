import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  user = {
    username: '',
    password: ''
  };
  constructor(private http: HttpClient,private router: Router) { }

  onSubmit() {
    // Send the registration request to the API
    this.http.post('http://localhost:3000/register', this.user)
      .subscribe(
        (response) => {
          console.log('Registration successful', response);
          alert("Registration successful");
          this.router.navigate(['/login']);
          // Handle success response here
        },
        (error) => {
          console.error('Registration failed', error);
          // Handle error response here
        }
      );
  }
  
}
