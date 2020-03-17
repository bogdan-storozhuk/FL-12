import {Injectable} from '@angular/core';

export interface User {
  name: string;
  email: string;
  phone: string;
  id: number;
}
@Injectable()
export class UsersService {
  users: User[] = [
    {name: 'Arianne Jensen', email: 'vsadboy234r@gmail.com', phone: '(243) 673-8063', id: 1},
    {name: 'Aiesha Wilkinson', email: 'himtiajshouvoz@gmail.com', phone: '(604) 356-9806', id: 2},
    {name: 'Helen Curry', email: '1bulbul.mtuhivihr@gmail.com', phone: '(518) 231-8325', id: 3},
    {name: 'Sulaiman Barker', email: '7dimafleurm@gmail.com', phone: '(324) 454-8128', id: 4},
    {name: 'Joni Singh', email: '9mercy2@gmail.com', phone: '(471) 209-4525', id: 5},
    {name: 'Misha Conner', email: 'khedar@gmail.com', phone: '(476) 320-1876', id: 6}
  ];
  getUsers() {
    return this.users;
  }
  removeUser(id: number) {
    this.users = this.users.filter(item => item.id !== id);
  }
  addUser(user: User) {
    this.users.unshift(user);
  }
}
