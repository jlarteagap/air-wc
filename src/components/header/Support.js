import React, { useState } from 'react'
import { Modal } from '../utils/Modal'

export const Support = ({ onClick }) => {
  const [modal, setModal] = useState(false)
  const [company, setCompany] = useState('')

  const toggleModal = data => {
    setModal(!modal)
    setCompany(data.target.innerHTML)
  }

  return (
    <>
      <div
        className="header__navbar-item button is-small header__navbar-button mr-2"
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
      <Modal modal={modal} toggleModal={toggleModal} company={company} />
    </>
  )
}
