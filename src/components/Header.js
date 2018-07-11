import './Header.scss'

import React from 'react'
import { NavLink } from 'react-router-dom'

import { Button } from 'semantic-ui-react'

import styled from 'styled-components'

const TestDiv = styled.div`
    text-align: center;
    background-color : #CE7692;
    padding: 5rem;`

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

        <h3>
            <NavLink to="/detail/5">Detail 5</NavLink>
        </h3>

        <Button>semantic-ui Button</Button>

        <TestDiv>
            styled-components TestDiv
        </TestDiv>

    </div>
)
