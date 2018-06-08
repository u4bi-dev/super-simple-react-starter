import React from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'

export default class MyRoute extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  // static propTypes = {
  //   store: PropTypes.object.isRequired,
  //   routes: PropTypes.object.isRequired,
  // }

  static contextTypes = {
    router: PropTypes.shape({
      staticContext: PropTypes.object,
    }),
    store: PropTypes.object,
  }

  componentDidMount() {}

  render() {
    // console.log('context:', this.props.)
    const { component: Component, ...rest } = this.props
    return <Route {...rest} render={props => <Component {...props} />} />
  }
}
