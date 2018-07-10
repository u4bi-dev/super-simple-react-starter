import './Header.scss'

import React from 'react'
import { NavLink } from 'react-router-dom'

import { Button } from 'semantic-ui-react'

export default () => (
  <div className="Header">

    <h3>
      <NavLink exact to="/">Home</NavLink>
    </h3>

    <h3>
      <NavLink to="/about">About</NavLink>
    </h3>

    <h3>
      <NavLink to="/contact">Contact</NavLink>
    </h3>

    <Button>semantic-ui Button</Button>

  </div>
)
