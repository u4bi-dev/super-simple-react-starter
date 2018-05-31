import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import Layout from './components/Layout'

const App = (
  <Router>
    <Layout />
  </Router>
)

ReactDOM.hydrate(App, document.getElementById('app'))
