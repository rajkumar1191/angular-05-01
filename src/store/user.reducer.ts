import { createReducer, on } from '@ngrx/store';
import { initialUserState, userAdapter } from './user.state';
import * as UserActions from './user.action';

export const userReducer = createReducer(
  initialUserState,
  on(UserActions.loadUsers, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(UserActions.loadUsersSuccess, (state, { users }) =>
    userAdapter.setAll(users, {
      ...state,
      loading: false,
      error: null,
    }),
  ),
  on(UserActions.loadUsersFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error: error,
  })),
);
