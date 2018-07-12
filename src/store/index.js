import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import reducers from './reducers'
import epics from './epics';

export const createServerStore = _ => {

    const epicMiddleware = createEpicMiddleware()

    const store = createStore(
        reducers,
        {},
        applyMiddleware(epicMiddleware)
    )

    epicMiddleware.run(epics);

    return store
}

export const configureStore = initialState => {

    const epicMiddleware = createEpicMiddleware()

    const store = createStore(
        reducers,
        initialState,
        applyMiddleware(epicMiddleware)
    )

    epicMiddleware.run(epics);

    return store
}
