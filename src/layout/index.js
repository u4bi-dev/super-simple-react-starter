import '../assets/normalize.scss'
import '../assets/base.scss'

import React from 'react'
import { Switch } from 'react-router-dom'
import routes from '../routes'
import Header from './Header'
import MyRoute from './MyRoute'

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          {routes.map(route => <MyRoute key={route.path} {...route} />)}
        </Switch>
      </div>
    )
  }
}
