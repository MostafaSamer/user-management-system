import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  errorMessage: string | null = null;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
    if (this.authService.getLoggedInUser()) {
      this.router.navigate(['/']);
    }
  }

  onSubmit() {
    if (this.loginForm?.invalid) return;
    const { username, password } = this.loginForm.value;
    this.authService.login(username, password).subscribe(
      (res) => {
        if (res) {
          this.router.navigate(['/']);
        } else {
          this.errorMessage = 'Invalid username or password.';
        }
      },
      (error) => {
        console.error('An error occurred during login: ', error);
        this.errorMessage = 'An unexpected error occurred.';
      }
    );
  }
}
