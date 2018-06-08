import { combineReducers } from 'redux'
import app from './app'
import users from './users'

export default combineReducers({
  app,
  users,
})
