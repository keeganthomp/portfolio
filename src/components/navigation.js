import React, { useState } from "react"
import { Link } from "gatsby"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap"

const linkStyles = {
  color: "#333",
}

const activeStyles = {
  color: "lightgray",
}

const Navigation = ({ isHome }) => {
  const [collapsed, setCollapsed] = useState(true)

  const toggleNavbar = () => setCollapsed(!collapsed)
  return (
    <div>
      <div>
        <Navbar color='faded' light>
          <NavbarBrand href='/' className='mr-auto'>
            KT
          </NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className='mr-2' />
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
              {!isHome && (
                <NavItem>
                  <Link
                    style={{ ...linkStyles }}
                    activeStyle={{ ...activeStyles }}
                    to='/'
                  >
                    Home
                  </Link>
                </NavItem>
              )}
              <NavItem>
                <Link
                  style={{ ...linkStyles }}
                  activeStyle={{ ...activeStyles }}
                  to='/contact/'
                >
                  Contact
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  style={{ ...linkStyles }}
                  activeStyle={{ ...activeStyles }}
                  to='/about/'
                >
                  About
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  style={{ ...linkStyles }}
                  activeStyle={{ ...activeStyles }}
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
