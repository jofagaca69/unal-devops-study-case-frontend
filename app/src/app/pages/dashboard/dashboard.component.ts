import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgOptimizedImage, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  users: any[] = [];
  loading: boolean = true;
  error: string = '';

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.loading = true;
    this.authService.getUsers().subscribe({
      next: (response: any) => {
        this.users = response;
        this.loading = false;
      },
      error: (error) => {
        this.error = 'Error al cargar los usuarios';
        this.loading = false;
      }
    });
  }
}
