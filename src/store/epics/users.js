import { ActionTypes } from '../constants';
import { fetchUsersSuccess } from '../actions';

import { ofType } from 'redux-observable';
import { map } from 'rxjs/operators';

const mockUsers = [
    { name : 'AA' },
    { name : 'BB' },
    { name : 'CC' },
    { name : 'DD' }
];

export const users = (action$) => action$.pipe(
                                            ofType(ActionTypes.FETCH_USERS),
                                            // map(e => console.log(e)),
                                            map(_ => fetchUsersSuccess(mockUsers))
                                        );