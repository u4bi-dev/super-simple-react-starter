import immutable from 'immutability-helper';
import createReducer from '../createReducer';

import { ActionTypes } from '../constants';

const appState = {

};

export default {
  app : createReducer(appState, {
      [ActionTypes.SET_PREV_PATH](state, { data } ) {
          return immutable(state, {
              prevPath: {
                  $set : data
              }
          });
      }
  })
};