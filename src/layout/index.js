import '../assets/normalize.scss'
import '../assets/base.scss'

import React from 'react'
import { Route, Switch } from 'react-router-dom'
import routes from '../routes'
import Header from './Header'

const Layout = () => (
  <div>
    <Header />
    <Switch>{routes.map(route => <Route key={route.path} {...route} />)}</Switch>
  </div>
)

export default Layout
