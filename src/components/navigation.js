import React, { useState } from 'react'
import { Link } from 'gatsby'
import { Collapse, Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap'
import Logo from './logo'
import { HamburgerCollapse } from 'react-animated-burgers'
import Burger from '@animated-burgers/burger-slip'
import '@animated-burgers/burger-slip/dist/styles.css'


const Navigation = ({ isHome }) => {
  const [collapsed, setCollapsed] = useState(true)

  const toggleNavbar = () => setCollapsed(!collapsed)
  const handleClick = () => {
    if (!collapsed) {
      setCollapsed(true)
    }
  }
  return (
    <div>
      <div>
        <Navbar color='faded' light expand='md'>
          <NavbarBrand href='/' className='mr-auto'>
            <Logo />
          </NavbarBrand>
          {/* <HamburgerCollapse
            isActive={!collapsed}
            onClick={toggleNavbar}
            className='navigation_toggler'
          /> */}
          <Burger
            isOpen={!collapsed}
            onClick={toggleNavbar}
            className='navigation_toggler'
            Component='button'
            type='button'
          />
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
              {!isHome && (
                <NavItem onClick={() => handleClick()}>
                  <Link
                    className='nav-link'
                    activeClassName='nav-link--active'
                    to='/'
                  >
                    Home
                  </Link>
                </NavItem>
              )}
              <NavItem onClick={() => handleClick()}>
                <Link
                  className='nav-link'
                  activeClassName='nav-link--active'
                  to='/contact/'
                >
                  Contact
                </Link>
              </NavItem>
              <NavItem onClick={() => handleClick()}>
                <Link
                  className='nav-link'
                  activeClassName='nav-link--active'
                  to='/about/'
                >
                  About
                </Link>
              </NavItem>
              <NavItem onClick={() => handleClick()}>
                <Link
                  className='nav-link'
                  activeClassName='nav-link--active'
                  to='/skills/'
                >
                  Skills
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </div>
  )
}

export default Navigation
