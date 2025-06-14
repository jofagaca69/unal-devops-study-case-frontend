import { Message } from './../../../../node_modules/@angular-eslint/bundled-angular-compiler/dist/index.d';
import { Component } from '@angular/core';
import { JsonPipe, NgIf, NgOptimizedImage } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [NgOptimizedImage, ReactiveFormsModule, NgIf, JsonPipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  errorMsg = '';

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    const { email, password } = this.loginForm.value;
    this.authService.login(email!, password!).subscribe({
      next: (result: any) => {
        console.log({ result });
        this.errorMsg = '';
        if (result.success) {
          localStorage.setItem('name', result.user.first_name);
          this.router.navigate(['/dashboard']);
        } else {
          this.errorMsg = result.message;
        }
      },
      error: (error) => {
        if (error.error?.message) {
          this.errorMsg = error.error.message;
          return;
        }
        this.errorMsg = error.message;
      },
    });
  }
}
