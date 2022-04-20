import React, { useState } from 'react'
import MenuTooltip from './MenuTooltip'
import './header.css'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import logo from '../../assets/air-logo.svg'
import logoW from '../../assets/air-logo-w.svg'
import { Menu } from './Menu'
import { BurgerMenu } from './BurgerMenu'
import useData from '../../hooks/useData'
function Header() {
  const { empresa } = useData()
  const [menu, setMenu] = useState(false)
  const [isActive, setIsActive] = useState(false)
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
    <div className="header" id="inicio">
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
          <BurgerMenu
            isActive={isActive}
            onClick={() => {
              setIsActive(!isActive)
            }}
          />
          <a className="navbar-item" href={empresa.url}>
            <img
              className="header__logo"
              src={bgMenu ? logo : logoW}
              alt="AIR"
            />
          </a>
          <HiOutlineMenuAlt3
            size={24}
            className={`menu__hidden-brand menu__hidden-icon ${
              bgMenu && 'menu__hidden-icon-color'
            }`}
            onClick={() => {
              setMenu(!menu)
            }}
          />
        </div>

        <div
          className={`navbar-menu ${isActive && 'is-active'} ${
            bgMenu || 'header__navbar-menu-color'
          }`}
        >
          <div className="navbar-start">
            <Menu />
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
