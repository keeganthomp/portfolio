import React, { useState } from 'react'
import { Link } from 'gatsby'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap'
import Logo from './logo'

const Navigation = ({ isHome }) => {
  const [collapsed, setCollapsed] = useState(true)

  const toggleNavbar = () => setCollapsed(!collapsed)
  return (
    <div>
      <div>
        <Navbar color='faded' light expand='md'>
          <NavbarBrand href='/' className='mr-auto'>
            <Logo width={'5rem'} />
          </NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className='mr-2' />
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
              {!isHome && (
                <NavItem>
                  <Link
                    className='nav-link'
                    activeClassName='nav-link--active'
                    to='/'
                  >
                    Home
                  </Link>
                </NavItem>
              )}
              <NavItem>
                <Link
                  className='nav-link'
                  activeClassName='nav-link--active'
                  to='/contact/'
                >
                  Contact
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  className='nav-link'
                  activeClassName='nav-link--active'
                  to='/about/'
                >
                  About
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  className='nav-link'
                  activeClassName='nav-link--active'
                  to='/skills/'
                >
                  Skills
                </Link>
              </NavItem>
              <span
                style={{
                  color: 'rgba(0,0,0,.5)',
                  fontSize: '14px',
                  textAlign: 'right',
                }}
                className='nav-item_footer'
              >
                © {new Date().getFullYear()}, Keegan Thompson
              </span>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </div>
  )
}

export default Navigation
