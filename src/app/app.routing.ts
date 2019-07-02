import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { UsersResolver } from './components/users/users.resolver';
import { ItemsComponent } from './components/items/items.component';

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: UsersComponent, resolve: { users: UsersResolver } },
  { path: 'items/:userId', component: ItemsComponent, resolve: { users: UsersResolver } }
];

export const appComponents = [
  UsersComponent,
  ItemsComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [UsersResolver]
})
export class AppRoutingModule { }
