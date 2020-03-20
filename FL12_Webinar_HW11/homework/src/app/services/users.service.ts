import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface User {
  name: string;
  email: string;
  phone: string;
  adress?: string;
  website?: string;
  id: number;
}
@Injectable()
export class UsersService {
  constructor(private http: HttpClient) {
  }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000/users');
  }
  removeUser(id: number): Observable<void> {
   return this.http.delete<void>(`http://localhost:3000/users/${id}`);
  }
  addUser(user: User): Observable<User> {
   return this.http.post<User>('http://localhost:3000/users', user);
  }
  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`http://localhost:3000/users/${user.id}`, user);
  }
  getById(id: number): Observable<User> {
    return this.http.get<User>(`http://localhost:3000/users/${id}`);
  }
}
