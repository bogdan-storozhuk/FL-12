import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UserItemComponent } from './user-item/user-item.component';
import { FilterPipe } from './pipes/filter.pipe';
import {UsersService} from './services/users.service';
import { UserListComponent } from './user-list/user-list.component';
import { UserListControlbarComponent } from './user-list-controlbar/user-list-controlbar.component';
import { MainPageComponent } from './main-page/main-page.component';
import {AppRoutingModule} from './app-routing.module';
import { FormPageComponent } from './form-page/form-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UserItemComponent,
    FilterPipe,
    UserListComponent,
    UserListControlbarComponent,
    MainPageComponent,
    FormPageComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
