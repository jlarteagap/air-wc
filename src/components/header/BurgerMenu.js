import React from 'react'

export const BurgerMenu = ({ isActive, onClick }) => {
  return (
    <div
      onClick={onClick}
      role="button"
      className={`header__navbar-menu navbar-burger ${
        isActive ? 'is-active' : ''
      }`}
    >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </div>
  )
}
