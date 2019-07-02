import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item, User } from 'src/app/models/user.model';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html'
})

export class ListingComponent {

  @Input() rows: (User | Item)[];
  @Input() isItemListing: boolean;
  @Output() edit: EventEmitter<Item | User>;
  @Output() remove: EventEmitter<Item | User>;

  constructor() {
    this.rows = [];
    this.isItemListing = false;
    this.edit = new EventEmitter<Item | User>();
    this.remove = new EventEmitter<Item | User>();
  }

}
