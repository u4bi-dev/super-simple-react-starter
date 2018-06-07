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

  componentDidMount() {
    console.log(this.props)
    // const { component, isServer } = this.props
    // if (!isServer && component.prefetch) {
    //   component.prefetch(this.context.store)
    // }
    // // console.log(this.props)
    // // console.log('isServer:' + this.state.isServer)
    // try {
    //   // const apiValue = await get('/some/api')
    //   // this.setState({ apiValue })
    // } catch (err) {
    //   // error handling
    // }
  }

  render() {
    // console.log('context:', this.props.)
    const { component: Component, ...rest } = this.props
    return <Route {...rest} render={props => <Component {...props} />} />
  }
}
