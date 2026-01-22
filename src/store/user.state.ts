import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { User } from './user.model';

export interface UserState extends EntityState<User> {
    loading: boolean;
    error: any;
}

export const userAdapter = createEntityAdapter<User>();

export const initialUserState: UserState = userAdapter.getInitialState({
    loading: false,
    error: null,
});