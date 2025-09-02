import { Component, input } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { UserCardComponent } from "../user-card/user-card.component";

@Component({
  selector: 'user-list',
  imports: [UserCardComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent {
  users = input<User[]>();
}
