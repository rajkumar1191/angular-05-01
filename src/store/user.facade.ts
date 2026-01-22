import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as UserActions from './user.action';
import * as UserSelectors from './user.selector';

@Injectable({ providedIn: 'root' })
export class UserFacade {
  private store = inject(Store);

  loadUsers() {
    this.store.dispatch(UserActions.loadUsers());
  }
  users$ = this.store.select(UserSelectors.selectAllUsers);
  loading$ = this.store.select(UserSelectors.selectUserLoading);
  error$ = this.store.select(UserSelectors.selectUserError);
}
