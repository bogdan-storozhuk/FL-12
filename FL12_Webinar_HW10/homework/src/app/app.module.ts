import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UserItemComponent } from './user-item/user-item.component';
import { UserFormComponent } from './user-form/user-form.component';
import { FilterPipe } from './pipes/filter.pipe';
import {UsersService} from './services/users.service';

@NgModule({
  declarations: [
    AppComponent,
    UserItemComponent,
    UserFormComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
