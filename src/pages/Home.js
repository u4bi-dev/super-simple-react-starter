import './Home.scss'

import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchUsers } from '../store/actions'

class Home extends Component {

    componentDidMount() {
        const { onFetchUsers } = this.props

        onFetchUsers()

    }

    renderUsers(data) {

        return data.map( (e, i) => ( <li key={ i }> { e.name }</li> ))

    }

    render() {

        const { users } = this.props;

        return (
        <div className="Home">
            <ul>
                { !users.pending && this.renderUsers(users.data) }
            </ul>
        </div>
        )
    }
}

const mapState = (state, ownProps) => ({ 
    users : state.users
});

const mapDispatch = (dispatch, ownProps) => ({
    onFetchUsers : () => dispatch(fetchUsers())
});

export default connect(mapState, mapDispatch)(Home);