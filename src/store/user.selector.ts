import { createSelector, createFeatureSelector } from '@ngrx/store';
import { UserState, userAdapter } from './user.state';

export const selectUserState = createFeatureSelector<UserState>('users');

const { selectAll } = userAdapter.getSelectors();

export const selectAllUsers = createSelector(selectUserState, selectAll);

export const selectUserLoading = createSelector(
  selectUserState,
  (state) => state.loading,
);

export const selectUserError = createSelector(
  selectUserState,
  (state) => state.error,
);
