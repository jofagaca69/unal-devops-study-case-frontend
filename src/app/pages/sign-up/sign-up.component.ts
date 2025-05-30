import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {AuthService} from '../../services/auth.service';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  imports: [
    NgOptimizedImage,
    ReactiveFormsModule
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {

  signUpForm = new FormGroup({
    name: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })

  constructor(private authService: AuthService) {}

  signUp() {
    const body: any = this.signUpForm.value;
    this.authService.signup(body).subscribe();
  }
}
