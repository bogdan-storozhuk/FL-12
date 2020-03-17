import { Component } from '@angular/core';
import {User, UsersService} from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'homework';
  postFormToggle = false;
  search = '';
  constructor(public usersService: UsersService) {
  }
  updateUsers(user: User) {
    this.usersService.addUser(user)
    this.postFormToggle = false;
  }
  discardFormChanges() {
    this.postFormToggle = false;
  }
}
