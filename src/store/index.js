import axios from 'axios'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'

export const createServerStore = req => {
  const axiosInstance = axios.create({
    headers: { cookie: req.get('cookie') || '' },
  })

  return createStore(
    reducers,
    {},
    applyMiddleware(thunk.withExtraArgument(axiosInstance))
  )
}

export const createClientStore = initialState => {
  const axiosInstance = axios.create()

  return createStore(
    reducers,
    initialState,
    applyMiddleware(thunk.withExtraArgument(axiosInstance))
  )
}
