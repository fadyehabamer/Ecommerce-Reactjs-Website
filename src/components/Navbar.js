import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'
import { ButtonContainer } from './Button'
import styled from 'styled-components'

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-dark bg-dark px-2" >
                <Link to="/">
                    <img src={logo} alt="logo" className="logo" />
                </Link>

                <ul className="navbar-nav align-items-center" >
                    <li className="nav-item ml-5 "  >
                        <Link to="" className="nav-link">
                            Products
                        </Link>
                    </li>
                </ul>

                <Link to="/cart" className="ml-auto" >
                    <ButtonContainer>
                        <span className="mr-2">
                            <i className="fas fa-cart-plus"></i>

                        </span> my cart
                    </ButtonContainer>
                </Link>

            </NavWrapper>
        )
    }
}
const NavWrapper = styled.nav`
    .nav-link{
        color:var(--mainwhite) !important;
        font-size:1.2rem;
        text-transform:capitalize !important;
    }
}
`