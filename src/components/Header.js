import './Header.scss'

import React from 'react'
import { NavLink } from 'react-router-dom'

import SvgIcon from '../components/SvgIcon'
import reactSvg from '../assets/react.svg'

export default () => (
  <div className="Header">
    <SvgIcon className="Header-logo" svg={reactSvg} />
    <div className="Header-nav">
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <a style={{ color: 'gold' }} href="https://github.com/liamwang/react-starter">
        GitHub
      </a>
    </div>
  </div>
)
