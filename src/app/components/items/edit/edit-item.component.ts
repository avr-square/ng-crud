import { Component, Input, ViewChild } from '@angular/core';
import { Item } from 'src/app/models/user.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html'
})

export class EditItemComponent {

  @Input() userId: number;
  @Input() item: Item;
  @ViewChild('form', { static: true }) form: any;

  constructor(
    private _NgbActiveModal: NgbActiveModal,
    private _MainService: MainService
  ) {
    this.userId = 0;
    this.item = new Item();
  }

  get ngbActiveModal(): NgbActiveModal {
    return this._NgbActiveModal;
  }

  onFormSubmit() {
    if (this.form.valid) {
      const users = this._MainService.getAllUsers().map((user) => {
        if (`${user.id}` === `${this.userId}`) {
          user.items = user.items.map(item => `${item.id}` === `${this.item.id}` ? { ...{}, ...item, ...this.item } : item);
        }
        return user;
      });
      this._MainService.setAllUsers(users);
      this._NgbActiveModal.close();
    }
  }

}
