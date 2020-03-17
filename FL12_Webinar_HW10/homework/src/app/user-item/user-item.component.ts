import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../services/users.service';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.less']
})
export class UserItemComponent implements OnInit {
  @Input() user: User;
  @Output() onRemove = new EventEmitter<number>();
  removeUser() {
    this.onRemove.emit(this.user.id);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
