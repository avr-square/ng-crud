import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item, User } from 'src/app/models/user.model';

@Component({
  selector: 'app-action-menu',
  templateUrl: './action.component.html'
})

export class ActionComponent {

  @Input() isItemListing: boolean;
  @Input() item: User | Item | null;
  @Input() index: number;
  @Output() rowRemoved: EventEmitter<number>;
  @Output() edit: EventEmitter<Item | User>;

  constructor() {
    this.isItemListing = false;
    this.item = null;
    this.index = 0;
    this.rowRemoved = new EventEmitter<number>();
    this.edit = new EventEmitter<Item | User>();
  }

}
