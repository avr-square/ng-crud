import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { takeWhile } from 'rxjs/operators';
import { MainService } from 'src/app/services/main.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditUserComponent } from './edit/edit-user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})

export class UsersComponent implements OnInit, OnDestroy {

  users: User[];
  alive: boolean;

  constructor(
    private _MainService: MainService,
    private _NgbModalService: NgbModal
  ) {
    this.users = [];
    this.alive = true;
  }

  ngOnInit() {
    this._MainService
      .getAllUsersAsObservable()
      .pipe(takeWhile(() => this.alive))
      .subscribe(users => this.users = users && users.length ? users : []);
  }

  ngOnDestroy() {
    this.alive = false;
  }

  editItem(user: User) {
    const modelRef = this._NgbModalService.open(EditUserComponent, {
      ariaLabelledBy: 'Edit user',
      centered: true
    });
    modelRef.componentInstance.user = { ...user };
  }

  removeItem(user: User) {
    this.users.forEach((val, index, array) => `${val.id}` === `${user.id}` && array.splice(index, 1));
    this._MainService.setAllUsers(this.users);
  }
}
