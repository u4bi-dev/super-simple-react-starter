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

    return users.map( (user, i) => ( <li key={ i }> { user.name }</li> ))
  }

  render() {

    return (
      <div className="Home">
        <ul>{ this.renderUsers() }</ul>
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