import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';
import {FormPageComponent} from './form-page/form-page.component';
import {ErrorPageComponent} from './error-page/error-page.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'users', component: MainPageComponent },
  {path: 'users/new', component: FormPageComponent },
  {path: 'users/:id', component: FormPageComponent},
  {path: 'error', component: ErrorPageComponent},
  {path: '**', redirectTo: '/error'}
  ];

@NgModule({
imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
