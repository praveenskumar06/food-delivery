import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { FoodOrderPageComponent } from './food-order-page/food-order-page.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'search', component: SearchPageComponent},
  {path: 'restaurant/:id', component: FoodOrderPageComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
