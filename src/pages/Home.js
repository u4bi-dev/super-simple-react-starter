import './Home.scss'

import React from 'react'
import Header from '../layout/Header'

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Header />
        <div className="Home-intro">
          <a href="https://github.com/liamwang/vue-ssr-starter">GitHub</a>
        </div>
      </div>
    )
  }
}

export default Home
