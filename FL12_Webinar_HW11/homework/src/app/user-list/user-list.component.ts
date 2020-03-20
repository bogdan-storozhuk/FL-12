import {Component, Input, OnInit} from '@angular/core';
import {User, UsersService} from '../services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.less']
})
export class UserListComponent implements OnInit {
  @Input() search;
  users: User[] = [];
  loading = false;
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.loading = true;
    this.usersService.getUsers()
      .subscribe(users => {
        this.users = users;
        this.loading = false;
      });
  }
  removeUser(id: number) {
      this.usersService.removeUser(id)
      .subscribe(() => {
        this.users = this.users.filter(user => user.id !== id);
      });
  }
}
