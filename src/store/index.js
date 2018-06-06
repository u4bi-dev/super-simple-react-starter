import axios from 'axios'
import thunk from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware } from 'redux'

import userReducer from './reducers/userReducer'

const reducers = combineReducers({
  users: userReducer,
})

export const createServerStore = req => {
  const axiosInstance = axios.create({
    baseURL: 'https://restcountries.eu/rest/v1/',
    headers: { cookie: req.get('cookie') || '' },
  })

  return createStore(reducers, {}, applyMiddleware(thunk.withExtraArgument(axiosInstance)))
}

export const createClientStore = initialState => {
  const axiosInstance = axios.create({
    baseURL: 'https://restcountries.eu/rest/v1/',
  })

  return createStore(
    reducers,
    initialState,
    applyMiddleware(thunk.withExtraArgument(axiosInstance))
  )
}
