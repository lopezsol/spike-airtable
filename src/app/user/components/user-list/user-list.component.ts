import { Component, input } from '@angular/core';
import { UserCardComponent } from "../user-card/user-card.component";
import type { User } from '../../interfaces/user.interface';

@Component({
  selector: 'user-list',
  imports: [UserCardComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent {
  users = input<User[]>();
}
