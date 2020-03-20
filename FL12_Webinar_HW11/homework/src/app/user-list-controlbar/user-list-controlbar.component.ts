import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-list-controlbar',
  templateUrl: './user-list-controlbar.component.html',
  styleUrls: ['./user-list-controlbar.component.less']
})
export class UserListControlbarComponent implements OnInit {
  @Output() onSearchChange: EventEmitter<string> = new EventEmitter<string>();
  search = '';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onInput(event: any) {
    this.search = event.target.value;
    this.onSearchChange.emit(this.search);
  }

  goToAddUserForm() {
  this.router.navigate(['/users/new']);
  }
}
