import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../../../core/store/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  users: Observable<any[]>;
  constructor(private _store: Store<any>, private _userSvc: UserService) {}
  submit(action) {
    switch (action.type) {
      case 'ADD': {
        this._userSvc.addUser(action.data);
        return;
      }
      default: {
        return;
      }
    }
  }
  ngOnInit() {
    this.users = this._store.select('usersState').select('users');
  }
}
