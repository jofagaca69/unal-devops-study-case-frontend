import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly BASE_URL = `${environment.apiUrl}`;

  constructor() { }

  login(email: string, password: string) {
    return this.http.post(`${this.BASE_URL}/login`, { email, password });
  }

  signup(body?: { name: string, password: string, namelastname: string, email: string }) {
    return this.http.post(`${this.BASE_URL}/signup`, body);
  }

  getUsers() {
    return this.http.get(`${this.BASE_URL}/users`);
  }
}
