import React, { useState } from 'react'
import { Modal } from '../utils/Modal'

export const Support = ({ bhMenu }) => {
  const [modal, setModal] = useState(false)
  const [company, setCompany] = useState('')

  const toggleModal = data => {
    setModal(!modal)
    setCompany(data.target.innerHTML)
  }

  return (
    <div className="is-flex is-flex-direction-column">
      <p className="pl-2 is-size-7">Soporte</p>
      <div className="">
        <div
          className="header__navbar-item button is-small header__navbar-button mx-2"
          onClick={toggleModal}
        >
          Dell
        </div>
        <div
          className="header__navbar-item button is-small header__navbar-button mr-4"
          onClick={toggleModal}
        >
          Cisco
        </div>
      </div>
      <Modal modal={modal} toggleModal={toggleModal} company={company} />
    </div>
  )
}
