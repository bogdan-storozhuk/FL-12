import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {User, UsersService} from '../services/users.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.less']
})
export class FormPageComponent implements OnInit {
  user: User;
  formName = 'New User';
  form: FormGroup;
  constructor(private route: ActivatedRoute, private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required]),
      phone: new FormControl('', [Validators.required]),
      adress: new FormControl(''),
      website: new FormControl('')
    });
    this.route.params.subscribe((params: Params) => {
        if (params.id) {
          this.usersService.getById(+params.id)
            .subscribe(user => {
              this.user = user;
              this.formName = 'Edit User';
            });
        }
      });
  }

  submit() {
    if (!this.form.valid) {return; }
    let formData: User;
    if (this.user) {
        formData = {...this.form.value, id: this.user.id};
        this.usersService.updateUser(formData)
          .subscribe(user => {
            this.router.navigate(['/users']);
          });
      } else {
        formData = {...this.form.value, id: new Date().getUTCMilliseconds()};
        this.usersService.addUser(formData)
        .subscribe(user => {
          this.router.navigate(['/users']);
        });
      }
  }

  discard() {
    this.form.reset();
  }
}
