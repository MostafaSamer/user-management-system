import { Component } from '@angular/core';

interface LoginModel {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  model: LoginModel = {
    username: '',
    password: ''
  };
  
  onSubmit() {
    // Handle form submission logic here
    console.log('Form submitted:', this.model);
  }

}
