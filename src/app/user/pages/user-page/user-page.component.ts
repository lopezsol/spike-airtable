import { Component, inject, signal } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserListComponent } from '../../components/user-list/user-list.component';
import { ProgressSpinner } from 'primeng/progressspinner';
import type { User } from '../../interfaces/user.interface';

@Component({
  selector: 'user-page',
  imports: [UserListComponent, ProgressSpinner],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css',
})
export class UserPageComponent {
  userService = inject(UserService);
  users = signal<User[]>([]);
  isLoading = signal<boolean>(false);

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.isLoading.set(true);
    this.userService.getAllUsers().subscribe({
      next: (user) => {
        this.users.set(user);
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error('Error trayendo los usuarios, ', err);
        this.isLoading.set(false);
      },
    });
  }
}
