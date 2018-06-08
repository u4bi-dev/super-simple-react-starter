import React from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'

export default class MyRoute extends React.Component {
  state = {
    prevPath: this.context.store.getState().prevPath,
    currPath: this.context.router.route.match.path,
  }

  static contextTypes = {
    router: PropTypes.shape({
      staticContext: PropTypes.object,
    }),
    store: PropTypes.object,
  }

  shouldComponentUpdate() {
    return true
  }

  componentDidMount() {
    console.log('prevPath', this.state.prevPath)
    console.log('currPath', this.state.currPath)
  }

  render() {
    // console.log('context:', this.props.)
    const { component: Component, ...rest } = this.props
    return <Route {...rest} render={props => <Component {...props} />} />
  }
}
