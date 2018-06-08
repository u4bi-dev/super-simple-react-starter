import React from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'

export default class MyRoute extends React.Component {
  state = {
    prevPath: this.context.store.getState().app.prevPath,
    currPath: this.context.router.route.match.path,
  }

  static contextTypes = {
    router: PropTypes.shape({
      staticContext: PropTypes.object,
    }),
    store: PropTypes.object,
  }

  shouldComponentUpdate() {
    return this.state.prevPath !== this.state.currPath
  }

  componentDidMount() {
    if (this.shouldComponentUpdate() && this.props.component.prefetch) {
      this.props.component.prefetch(this.context.store)
    }
  }

  render() {
    const { component: Component, ...rest } = this.props
    return <Route {...rest} render={props => <Component {...props} />} />
  }
}
