import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../services/users.service';
import {Router} from '@angular/router';

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
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToEditUserForm() {
    this.router.navigate(['/users', this.user.id]);
  }
}
