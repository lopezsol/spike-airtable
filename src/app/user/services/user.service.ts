import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import type { User } from '../interfaces/user.interface';

const baseUrl = environment.baseUrl;
@Injectable({
  providedIn: 'root',
})
export class UserService {
  http = inject(HttpClient);

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${baseUrl}/airtable/employees`);
  }
}
