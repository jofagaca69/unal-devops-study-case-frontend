import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [NgOptimizedImage, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })

  constructor(private authService: AuthService) {}

  login() {
    const {email, password} = this.loginForm.value;
    this.authService.login(email!, password!).subscribe();
  }
}
