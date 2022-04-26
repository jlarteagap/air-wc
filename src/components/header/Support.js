import React, { useState } from 'react'
import { Modal } from '../utils/Modal'
import iconW from '../../assets/icono_soporte-w.png'
import icon from '../../assets/icono_soporte.png'
export const Support = ({ bgMenu }) => {
  const [modal, setModal] = useState(false)
  const [company, setCompany] = useState('')

  const toggleModal = data => {
    setModal(!modal)
    setCompany(data.target.innerHTML)
  }

  return (
    <div className="is-flex is-flex-direction-column">
      <div className="">
        <div
          className="header__navbar-item button is-small header__navbar-button mx-2"
          onClick={toggleModal}
        >
          <span className="icon is-small header__support-icon">
            <img src={bgMenu ? icon : iconW} alt="support icon" />
          </span>
          Dell
        </div>
        <div
          className="header__navbar-item button is-small header__navbar-button mr-4"
          onClick={toggleModal}
        >
          <span className="icon is-small header__support-icon">
            <img src={bgMenu ? icon : iconW} alt="support icon" />
          </span>
          Cisco
        </div>
      </div>
      <Modal modal={modal} toggleModal={toggleModal} company={company} />
    </div>
  )
}
