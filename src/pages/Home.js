import './Home.scss'

import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchUsers } from '../store/actions'

class Home extends Component {

  static prefetch(store) {
    store.dispatch(fetchUsers());
  }

  renderUsers() {
    const { users } = this.props;

    return users.map( (user, i) => {
      return (
        <li key={ i }> { user.name }</li>
      )
    })
  }

  render() {

    return (
      <div className="Home">
        <h1>Welcome to React-Starter</h1>
        <div className="Home-users">
          <ul>{this.renderUsers()}</ul>
        </div>
      </div>
    )
  }
}

const mapState = (state, ownProps) => ({ 
  users: state.users.data
});

const mapDispatch = (dispatch, ownProps) => ({

});

export default connect(mapState, mapDispatch)(Home);