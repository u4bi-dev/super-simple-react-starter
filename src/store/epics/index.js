import { combineEpics } from 'redux-observable';
import { users } from './users';

export default combineEpics(
    users
);