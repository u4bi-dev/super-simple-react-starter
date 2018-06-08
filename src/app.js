import './assets/normalize.scss'
import './assets/base.scss'

import React from 'react'
import { Switch } from 'react-router-dom'
import Header from './components/Header'
import MyRoute from './components/MyRoute'
import routes from './routes'

class App extends React.Component {
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

export default App
