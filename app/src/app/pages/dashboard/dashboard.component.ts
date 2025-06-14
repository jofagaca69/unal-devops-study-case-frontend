import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { NgOptimizedImage } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgOptimizedImage, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  userName = '';
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.userName = localStorage.getItem('name') ?? '@';
  }

  signout() {
    this.router.navigate(['/login']);
  }
}
