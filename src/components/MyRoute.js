import React from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import { setPrevPath } from '../store/actions'

export default class MyRoute extends React.Component {
  static contextTypes = {
    router: PropTypes.shape({
      staticContext: PropTypes.object,
    }),
    store: PropTypes.object,
  }

  state = {
    prevPath: this.context.store.getState().app.prevPath,
    currPath: this.context.router.route.match.path,
  }

  shouldComponentUpdate() {
    return this.state.prevPath !== this.state.currPath
  }

  componentDidMount() {
    const prefetch = this.props.component.prefetch
    if (this.shouldComponentUpdate() && prefetch) {
      prefetch(this.context.store)
    }
  }

  componentWillUnmount() {
    this.context.store.dispatch(setPrevPath(this.state.currPath))
  }

  render() {
    const { component: Component, ...rest } = this.props
    return <Route {...rest} render={props => <Component {...props} />} />
  }
}
