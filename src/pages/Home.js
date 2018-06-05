import './Home.scss'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchData } from '../store'

class Home extends Component {
  componentDidMount() {
    if (this.props.circuits.length <= 0) {
      this.props.fetchData()
    }
  }
  render() {
    const { circuits } = this.props

    return (
      <div className="Home">
        <h1>Welcome to React-Starter</h1>
        <a href="https://github.com/liamwang/vue-ssr-starter">GitHub</a>

        <div>
          <h2>F1 2018 Season Calendar</h2>
          <ul>
            {circuits.map(({ circuitId, circuitName, Location }) => (
              <li key={circuitId}>
                {circuitName} - {Location.locality}, {Location.country}
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

Home.prefetch = fetchData

const mapStateToProps = state => ({
  circuits: state.data,
})

const mapDispatchToProps = {
  fetchData,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
