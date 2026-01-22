import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as UserActions from './user.action';
import { HttpClient } from '@angular/common/http';
import { catchError, map, switchMap, of, debounceTime } from 'rxjs';
import { User } from './user.model';

@Injectable()
export class UserEffects {

 private actions$ = inject(Actions);
 private http = inject(HttpClient);

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUsers),
      debounceTime(3000),
      switchMap(() =>
        this.http
          .get<User[]>('https://jsonplaceholder.typicode.com/users')
          .pipe(
            map((users) => UserActions.loadUsersSuccess({ users })),
            catchError((error) => of(UserActions.loadUsersFailure({ error }))),
          ),
      ),
    ),
  );
}
