import immutable from 'immutability-helper';
import createReducer from '../createReducer';

import { ActionTypes } from '../constants';

const userState = {
    pending: false,
    data : {}
};

export default {
  users : createReducer(userState, {
      [ActionTypes.FETCH_USERS](state) {
          return immutable(state, {
              pending: { 
                  $set : true
              }
          });
      },
      [ActionTypes.FETCH_USERS_SUCCESS](state, { data }) {
          return immutable(state, {
              pending: { 
                  $set : false
              },
              data : {
                  $set : data
              }
          });
      },
  })
};