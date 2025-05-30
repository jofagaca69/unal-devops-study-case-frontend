import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly BASE_URL = '/api/auth';

  constructor() { }

  login(username: string, password: string) {
    return this.http.post(`${this.BASE_URL}/login`, { username, password });
  }

  signup(body?: { name: string, password: string, namelastname: string, email: string }) {
    return this.http.post(`${this.BASE_URL}/signup`, body);
  }

  getUsers() {
    return this.http.get(`${this.BASE_URL}/users`);
  }
}
