import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { Observable, from as observableFrom } from 'rxjs';
import { MainService } from 'src/app/services/main.service';
import { tap } from 'rxjs/operators';

@Injectable()

export class UsersResolver implements Resolve<User[]> {

  constructor(private _MainService: MainService) { }

  resolve(): Observable<User[]> {
    const users = this._MainService.getAllUsers();
    if (users && users.length) {
      return observableFrom([users]);
    }
    return this._MainService.getAllUsersFromAPI().pipe(tap(allUsers => this._MainService.setAllUsers(allUsers)));
  }
}
