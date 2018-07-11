import './Detail.scss'

import React, { Component } from 'react'

class Detail extends Component {
    render() {
        return <h1 className="Detail">Detail Page { this.props.match.params.no }</h1>
    }
}

export default Detail
