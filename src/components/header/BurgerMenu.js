import React from 'react'

export const BurgerMenu = ({ isActive, onClick, bgMenu }) => {
  return (
    <div
      onClick={onClick}
      role="button"
      className={`${
        bgMenu ? 'header__navbar-menu-c' : 'header__navbar-menu'
      } navbar-burger ${isActive ? 'is-active' : ''}`}
    >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </div>
  )
}
