import React from 'react'
import logo from '../assets/react.svg'
import './Home.css'

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <div className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h2>Welcome to Razzle</h2>
        </div>
        <p className="Home-intro">Hellow World!</p>
        <ul className="Home-resources">
          <li>
            <a href="https://github.com/liamwang/react-starter">Docs</a>
          </li>
          <li>
            <a href="https://github.com/liamwang/react-starter/issues">Issues</a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Home
