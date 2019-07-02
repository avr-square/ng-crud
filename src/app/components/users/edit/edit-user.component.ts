import { Component, ViewChild, Input } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html'
})

export class EditUserComponent {
  @Input() user: User;
  @ViewChild('form', { static: true }) form: any;

  constructor(
    private _NgbActiveModal: NgbActiveModal,
    private _MainService: MainService
  ) {
    this.user = new User();
  }

  get ngbActiveModal(): NgbActiveModal {
    return this._NgbActiveModal;
  }

  onFormSubmit() {
    if (this.form.valid) {
      const users = this._MainService
        .getAllUsers()
        .map(user => `${user.id}` === `${this.user.id}` ? { ...{}, ...user, ...this.user } : user);
      this._MainService.setAllUsers(users);
      this._NgbActiveModal.close();
    }
  }
}
