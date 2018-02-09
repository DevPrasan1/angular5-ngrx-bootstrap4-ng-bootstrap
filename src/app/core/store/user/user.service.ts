import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from './user';
import * as UserActions from './user.actions';

@Injectable()
export class UserService {
  constructor(private _store: Store<any>) {}

  addUser(user: User) {
    const action = new UserActions.Add(user);
    this._store.dispatch(action);
  }
  updateUser(user: User) {
    const action = new UserActions.Update(user);
    this._store.dispatch(action);
  }
  deleteUser(userId) {
    const action = new UserActions.Delete(userId);
    this._store.dispatch(action);
  }
}
