import React from 'react'
import { 
    Nav, 
    NavLink, 
    Bars, 
    NavMenu, 
    NavBtn, 
    NavBtnLink 
} from './NavbarComponents';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <h1>G Mint</h1>
                </NavLink>
                <Bars/>
                <NavMenu>
                    <NavLink to="/market" activeStyle>Market</NavLink>
                    <NavLink to="/sell" activeStyle>Sell</NavLink>
                    <NavLink to="/store" activeStyle>Create a Store</NavLink>
                    <NavLink to="/login" activeStyle>Login</NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signup">Create Account</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    )
}

export default Navbar;
