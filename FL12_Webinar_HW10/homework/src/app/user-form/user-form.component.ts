import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../services/users.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.less']
})
export class UserFormComponent implements OnInit {
  @Output() onAdd: EventEmitter<User> = new EventEmitter<User>();
  @Output() onDiscard: EventEmitter<void> = new EventEmitter<void>();
  form: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
        name: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.email, Validators.required]),
        phone: new FormControl('', [Validators.required])
    });
  }
  submit() {
    if (this.form.valid) {
      const formData: User = {...this.form.value, id: Math.random().toString(36).substr(2, 9)};
      this.onAdd.emit(formData);
    }
  }
  discard() {
    this.onDiscard.emit();
  }
}

