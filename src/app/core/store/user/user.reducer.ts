import * as UserAction from './user.actions';
import { User } from './user';

export interface UserState {
  users: User[];
}

export const INITIAL_USER_STATE = {
  users: [
    {
      id: 1,
      name: 'Dev',
    },
    {
      id: 2,
      name: 'Muskan',
    },
    {
      id: 3,
      name: 'Kashish',
    },
  ],
};

export const userReducer = (state: UserState, action: UserAction.ActionType): UserState => {
  switch (action.type) {
    case UserAction.ADD: {
      return {
        ...state,
        users: [...state.users, { ...action.payload, id: state.users.length + 1 }],
      };
    }
    case UserAction.UPDATE: {
      return {
        ...state,
        users: { ...state.users.map(user => (user.id === action.payload.id ? action.payload : user)) },
      };
    }
    case UserAction.DELETE: {
      return {
        ...state,
        users: { ...state.users.filter(user => (user.id === action.payload ? false : true)) },
      };
    }
    default: {
      return state;
    }
  }
};
