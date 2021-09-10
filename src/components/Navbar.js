import React, {useState } from 'react'
// import { Link } from 'react-router-dom'
import logo from '../logo.svg'
// import { ButtonContainer } from './Button'
// import styled from 'styled-components'

// *REACTSTRAP

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

const Example = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <React.Fragment>
            <Navbar className="px-3" color="dark" dark expand="md">
                <NavbarBrand href="/">
                    <img src={logo} alt="logo" className="logo" />
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse className="text-center" isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>

                        <NavItem>
                            <NavLink href="/productlist">Products</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink href="/about">About</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink href="/cart">
                                <span className="mr-2">
                                    <i className="fas fa-cart-plus"></i>
                                    Cart
                                </span>

                            </NavLink>

                        </NavItem>



                    </Nav>

                </Collapse>
            </Navbar>
        </React.Fragment>
    );
}

export default Example;


// export default class Navbar extends Component {
//     render() {
//         return (
//             <NavWrapper className="navbar navbar-dark bg-dark " >
//                 <Link to="/">
//                     <img src={logo} alt="logo" className="logo" />
//                 </Link>
//                 <ul className="navbar-nav d-flex flex-row flex-wrap justify-content-center align-items-center " >
//                     <li className="nav-item"  >
//                         <Link to="/productlist" className="nav-link">
//                             Products
//                         </Link>
//                     </li>
//                     <li className="nav-item"  >
//                         <Link to="/about" className="nav-link">
//                             About
//                         </Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link to="/cart" className="nav-link" >
//                             <ButtonContainer>
//                                 <span className="mr-2">
//                                     <i className="fas fa-cart-plus"></i>
//                                 </span> my cart
//                             </ButtonContainer>
//                         </Link>
//                     </li>
//                 </ul>
//             </NavWrapper>
//         )
//     }
// }
// const NavWrapper = styled.nav`
//     .nav-link{
//         color:var(--mainwhite) !important;
//         font-size:1.2rem;
//         text-transform:capitalize !important;
//     }
// }
// `
