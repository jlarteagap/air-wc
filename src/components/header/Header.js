import React, { useState } from 'react'
import MenuTooltip from './MenuTooltip'
import './header.css'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
function Header() {
  const [menu, setMenu] = useState(false)
  return (
    <div className="header">
      <nav
        className="header__navbar navbar is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
              <img
                src="https://bulma.io/images/bulma-logo.png"
                width="112"
                height="28"
              />
            </a>

            <a
              role="button"
              className="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item">Home</a>

              <a className="navbar-item">Documentation</a>

              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">More</a>

                <div className="navbar-dropdown">
                  <a className="navbar-item">About</a>
                  <a className="navbar-item">Jobs</a>
                  <a className="navbar-item">Contact</a>
                  <hr className="navbar-divider" />
                  <a className="navbar-item">Report an issue</a>
                </div>
              </div>
            </div>

            <div className="navbar-end is-align-items-center">
              <div className="menu__hidden">
                <HiOutlineMenuAlt3
                  size={24}
                  className="menu__hidden-icon"
                  onClick={() => {
                    setMenu(!menu)
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
      <MenuTooltip
        menu={menu}
        onClick={() => {
          setMenu(!menu)
        }}
      />
    </div>
  )
}
export default Header
