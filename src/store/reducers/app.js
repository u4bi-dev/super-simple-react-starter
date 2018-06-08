import { SET_PREV_PATH } from '../actions'

export default (state = {}, action) => {
  switch (action.type) {
    case SET_PREV_PATH:
      return {
        ...state,
        prevPath: action.data,
      }
    default:
      return state
  }
}
