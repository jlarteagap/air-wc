import React, { useState } from 'react'
import MenuTooltip from './MenuTooltip'
import './header.css'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import logo from '../../assets/air-logo.svg'
import logoW from '../../assets/air-logo-w.svg'
function Header() {
  const [menu, setMenu] = useState(false)
  const [bgMenu, setBgMenu] = useState(false)

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setBgMenu(true)
    } else {
      setBgMenu(false)
    }
  }
  window.addEventListener('scroll', changeNavbarColor)

  return (
    <div className="header">
      <nav
        className={`header__navbar navbar is-fixed-top ${
          bgMenu && 'header__navbar-white'
        }`}
        role="navigation"
        aria-label="main navigation"
      >
        <div
          className={`header__navbar-brand navbar-brand ${
            bgMenu && 'header__navbar-brand-white'
          }`}
        >
          <a className="navbar-item" href="https://bulma.io">
            <img className="header__logo" src={bgMenu ? logo : logoW} />
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
            <a className="header__navbar-item navbar-item">Home</a>

            <a className="header__navbar-item navbar-item">Documentation</a>
          </div>

          <div className="navbar-end is-align-items-center">
            <div className="menu__hidden mr-5">
              <HiOutlineMenuAlt3
                size={24}
                className={`menu__hidden-icon ${
                  bgMenu && 'menu__hidden-icon-color'
                }`}
                onClick={() => {
                  setMenu(!menu)
                }}
              />
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
