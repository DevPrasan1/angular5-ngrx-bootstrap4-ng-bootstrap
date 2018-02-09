import { ActionReducerMap, createSelector, ActionReducer } from '@ngrx/store';
import * as fromUser from './user/user.reducer';

export interface AppState {
  usersState: fromUser.UserState;
}
export const INITIAL_APP_INTERFACE = {
  usersState: fromUser.INITIAL_USER_STATE,
};
export const reducer: ActionReducerMap<AppState> = {
  usersState: fromUser.userReducer,
};
