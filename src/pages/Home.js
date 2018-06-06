import './Home.scss'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../store/actions'

class Home extends Component {
  componentDidMount() {
    // this.props.fetchUsers()
  }

  renderUsers() {
    return this.props.users.map(user => {
      return <li key={user.name}>{user.name}</li>
    })
  }

  render() {
    return (
      <div className="Home">
        <h1>Welcome to React-Starter</h1>
        <a href="https://github.com/liamwang/vue-ssr-starter">GitHub</a>
        <div>
          <ul>{this.renderUsers()}</ul>
        </div>
      </div>
    )
  }
}

Home.prefetch = prefetch

function mapStateToProps(state) {
  return { users: state.users }
}

function prefetch(store) {
  return store.dispatch(fetchUsers())
}

export default connect(
  mapStateToProps,
  { fetchUsers }
)(Home)
