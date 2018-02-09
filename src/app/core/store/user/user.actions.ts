import { Action } from '@ngrx/store';

import { User } from './user';

export const ADD = '[USER] add';
export const UPDATE = '[USER] update';
export const DELETE = '[USER] delete';

export class Add implements Action {
  readonly type = ADD;
  constructor(public payload: User) {}
}

export class Update implements Action {
  readonly type = UPDATE;
  constructor(public payload: User) {}
}

export class Delete implements Action {
  readonly type = DELETE;
  constructor(public payload: string) {}
}

export type ActionType = Add | Update | Delete;
