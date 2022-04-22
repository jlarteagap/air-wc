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
      <div className="header__navbar-item navbar-item" onClick={toggleModal}>
        Dell
      </div>
      <div
        className="header__navbar-item navbar-item mr-5"
        onClick={toggleModal}
      >
        Cisco
      </div>
      <Modal modal={modal} toggleModal={toggleModal} company={company} />
    </>
  )
}
