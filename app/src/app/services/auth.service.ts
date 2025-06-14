import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { SignupRequest } from './dto/signup.request.dto';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly BASE_URL = `${environment.apiUrl}`;

  constructor() {}

  login(email: string, password: string) {
    return this.http.post(`${this.BASE_URL}/login`, { email, password });
  }

  signup(body: SignupRequest) {
    return this.http.post(`${this.BASE_URL}/register`, body);
  }
}
