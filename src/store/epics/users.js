import { ActionTypes } from '../constants';
import { fetchUsersSuccess } from '../actions';

import { ofType } from 'redux-observable';
import { tap, map, mergeMap } from 'rxjs/operators';

import request from '../../common/request';

export const users = (action$) => action$.pipe(
                                            ofType(ActionTypes.FETCH_USERS),
                                            mergeMap(_ =>
                                                request({
                                                    url: 'http://localhost:3000/mock-users'
                                                })
                                            ),
                                            tap(e => console.log('epic users: ', e.response)),
                                            map(e => fetchUsersSuccess(e.response))
                                        );