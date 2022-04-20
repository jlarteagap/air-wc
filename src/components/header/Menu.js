import React from 'react'
import useData from '../../hooks/useData'

export const Menu = () => {
  const { serviceContext, testimonialContext, clientsContext } = useData()
  return (
    <>
      <a className="header__navbar-item navbar-item" href="#inicio">
        Home
      </a>
      {serviceContext && (
        <a className="header__navbar-item navbar-item" href="#servicios">
          Servicios
        </a>
      )}

      <a className="header__navbar-item navbar-item" href="#partners">
        Partners
      </a>
      {testimonialContext && (
        <a className="header__navbar-item navbar-item" href="#testimonios">
          Testimonios
        </a>
      )}
      {clientsContext && (
        <a className="header__navbar-item navbar-item" href="#clientes">
          Clientes
        </a>
      )}
      <a className="header__navbar-item navbar-item" href="#contacto">
        Contacto
      </a>
    </>
  )
}
