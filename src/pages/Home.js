import './Home.scss'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../store/actions'

class Home extends Component {
  static prefetch(store) {
    return store.dispatch(fetchUsers())
  }

  renderUsers() {
    return this.props.users.map(user => {
      return (
        <li key={user.login.username}>{`${user.name.first} ${
          user.name.last
        }`}</li>
      )
    })
  }

  render() {
    return (
      <div className="Home">
        <h1>Welcome to React-Starter</h1>
        <div className="Home-users">
          <h3 style={{ color: 'gray' }}>SSR Random Users</h3>
          <ul>{this.renderUsers()}</ul>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { users: state.users }
}

export default connect(
  mapStateToProps,
  { fetchUsers }
)(Home)
