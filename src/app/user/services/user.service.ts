import { inject, Injectable } from '@angular/core';
import users from '../mocks/user-response.json';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';
import { UserResponse } from '../interfaces/user-response.interface';
import { User } from '../interfaces/user.interface';
import { environment } from '../../../environments/environment';

const baseUrl = environment.baseUrl
@Injectable({
  providedIn: 'root',
})
export class UserService {
  http = inject(HttpClient);

  getAllUsers(): Observable<User[]> {

    return this.http.get<User[]>(`${baseUrl}/airtable/employees`);
  }
}
