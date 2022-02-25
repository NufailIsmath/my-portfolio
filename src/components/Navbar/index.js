import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Nav, Navbarcontainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <Navbarcontainer>
                    <NavLogo to="home">NuF Dev</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="aboutme">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="myworks">My Works</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="qualification">Qualification</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="experience">Expereince</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="contactme"> Contact Me </NavBtnLink>
                    </NavBtn>
                </Navbarcontainer>
            </Nav>
        </>
    )
}

export default Navbar
