import React from 'react'
import useData from '../../hooks/useData'

export const Menu = ({ onClick }) => {
  const { serviceContext, testimonialContext, clientsContext, brandsContext } =
    useData()
  return (
    <>
      <a
        className="header__navbar-item navbar-item"
        href="#inicio"
        onClick={onClick}
      >
        Home
      </a>
      {serviceContext && (
        <a
          className="header__navbar-item navbar-item"
          href="#servicios"
          onClick={onClick}
        >
          Servicios
        </a>
      )}

      <a
        className="header__navbar-item navbar-item"
        href="#partners"
        onClick={onClick}
      >
        Partners
      </a>
      {testimonialContext && (
        <a
          className="header__navbar-item navbar-item"
          href="#testimonios"
          onClick={onClick}
        >
          Testimonios
        </a>
      )}
      {brandsContext && (
        <a
          className="header__navbar-item navbar-item"
          href="#marcas"
          onClick={onClick}
        >
          Marcas
        </a>
      )}
      {clientsContext && (
        <a
          className="header__navbar-item navbar-item"
          href="#clientes"
          onClick={onClick}
        >
          Clientes
        </a>
      )}
      <a
        className="header__navbar-item navbar-item"
        href="#contacto"
        onClick={onClick}
      >
        Contacto
      </a>
    </>
  )
}
