import { Component, computed, input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { Tag } from 'primeng/tag';
import { ReferentTagComponent } from '../referent-tag/referent-tag.component';
import type { User } from '../../interfaces/user.interface';

@Component({
  selector: 'user-card',
  imports: [CardModule, Tag, ReferentTagComponent],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css',
})
export class UserCardComponent {
  user = input.required<User>();
  isReferent = computed(() => this.user().fields['Personas a cargo']);
}
