// import axios from 'axios'
// import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import reducers from './reducers'
import epics from './epics';

export const createServerStore = req => {
  // const axiosInstance = axios.create({
  //   headers: { cookie: req.get('cookie') || '' },
  // })

  const epicMiddleware = createEpicMiddleware()

  const store = createStore(
    reducers,
    {},
    // applyMiddleware(thunk.withExtraArgument(axiosInstance))
    applyMiddleware(epicMiddleware)
  )

  epicMiddleware.run(epics);

  return store
}

export const createClientStore = initialState => {
  // const axiosInstance = axios.create()
  
  const epicMiddleware = createEpicMiddleware()

  const store = createStore(
    reducers,
    initialState,
    // applyMiddleware(thunk.withExtraArgument(axiosInstance))
    applyMiddleware(epicMiddleware)
  )

  epicMiddleware.run(epics);

  return store
}
