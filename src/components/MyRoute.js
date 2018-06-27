import React from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import { setPrevPath } from '../store/actions'

export default class MyRoute extends React.Component {
  constructor(props, context) {
    super(props)
    this.prevPath = context.store.getState().app.prevPath
    this.currPath = context.router.route.location.pathname
  }

  static contextTypes = {
    router: PropTypes.shape({
      staticContext: PropTypes.object,
    }),
    store: PropTypes.object,
  }

  shouldComponentUpdate() {
    return this.prevPath !== this.currPath
  }

  componentDidMount() {
    const prefetch = this.props.component.prefetch
    if (this.shouldComponentUpdate() && prefetch) {
      prefetch(this.context.store)
    }
  }

  componentWillUnmount() {
    this.context.store.dispatch(setPrevPath(this.currPath))
  }

  render() {
    const { component: Component, ...rest } = this.props
    return <Route {...rest} render={props => <Component {...props} />} />
  }
}
