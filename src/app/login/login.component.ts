import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) {}

  userInput = {
    firstName: '',
    lastName: '',
    mobileNo: null,
    email: '',
    password: ''
  };

  validateAndSubmit() {
    const { firstName, lastName, mobileNo, email, password } = this.userInput;

    if (!this.isValidName(firstName) || !this.isValidName(lastName)) {
      alert('Please enter valid first and last names.');
      return;
    }

    if (!this.isValidPhone(String(mobileNo))) {
      alert('Please enter a valid mobile number.');
      return;
    }

    if (!this.isValidEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (!this.isValidPassword(password)) {
      alert('Please enter a password with at least 8 characters.');
      return;
    }

    // If all validations pass, navigate to the app route
    this.router.navigate(['/home']);
  }

  isValidName(name: string) {
    return /^[a-zA-Z]+$/.test(name.trim());
  }

  isValidPhone(phone: string) {
    return /^\d{10}$/.test(phone.trim());
  }

  isValidEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  }

  isValidPassword(password: string) {
    return password.trim().length >= 8;
  }
}
