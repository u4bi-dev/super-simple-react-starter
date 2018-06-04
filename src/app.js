import './assets/normalize.scss'
import './assets/base.scss'

import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './layout/Header'
import routes from './routes'

const App = () => (
  <div>
    <Header />
    <Switch>{routes.map(route => <Route key={route.path} {...route} />)}</Switch>
  </div>
)

export default App
