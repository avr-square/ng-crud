import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User, Item } from 'src/app/models/user.model';
import { takeWhile, map } from 'rxjs/operators';
import { MainService } from 'src/app/services/main.service';
import { EditItemComponent } from './edit/edit-item.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html'
})

export class ItemsComponent implements OnInit, OnDestroy {

  user: User | null;
  userId: number;
  alive: boolean;

  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _MainService: MainService,
    private _NgbModalService: NgbModal
  ) {
    this.user = null;
    this.userId = 0;
    this.alive = true;
  }

  ngOnInit() {
    this.userId = this._ActivatedRoute.snapshot.params.userId;

    this._MainService
      .getAllUsersAsObservable()
      .pipe(
        takeWhile(() => this.alive),
        map(users => (users.find(user => `${this.userId}` === `${user.id}`)) || null)
      )
      .subscribe(user => this.user = user);
  }

  ngOnDestroy() {
    this.alive = false;
  }

  editItem(item: Item) {
    const modelRef = this._NgbModalService.open(EditItemComponent, {
      ariaLabelledBy: 'Edit item',
      centered: true
    });
    modelRef.componentInstance.userId = this.userId;
    modelRef.componentInstance.item = { ...item };
  }

  removeItem(item: Item) {
    (this.user as User).items.forEach((val, index, array) => `${val.id}` === `${item.id}` && array.splice(index, 1));
    const users = this._MainService.getAllUsers().map(user => `${user.id}` === `${this.userId}` ? this.user as User : user);
    this._MainService.setAllUsers(users);
  }

}
