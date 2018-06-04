import './Header.scss'

import React from 'react'

import SvgIcon from '../components/SvgIcon'
import reactSvg from '../assets/react.svg'

export default () => (
  <div className="Header">
    <SvgIcon svg={reactSvg} />
    <h2>Welcome to React-Starter</h2>
  </div>
)
