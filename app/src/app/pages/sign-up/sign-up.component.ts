import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  imports: [NgOptimizedImage, ReactiveFormsModule, CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  signUpForm = new FormGroup({
    name: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    birthDate: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  errorMsg = '';

  constructor(private authService: AuthService, private router: Router) {}

  signUp() {
    const values: any = this.signUpForm.value;
    this.authService
      .signup({
        email: values.email,
        first_name: values.name,
        last_name: values.lastname,
        phone: values.phone,
        birth_date: this.getBirthDate(values.birthDate),
        password: values.password,
      })
      .subscribe({
        next: (result: any) => {
          this.errorMsg = '';
          if (result.success) {
            localStorage.setItem('name', values.name);
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

  private getBirthDate(birthDate: any) {
    const date = new Date(birthDate);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${month}-${day}-${year}`;
  }
}
