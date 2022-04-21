import React from 'react'

export const Modal = ({ modal, toggleModal, company }) => {
  return (
    <>
      <div className={`modal ${modal && 'is-active'}`}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal__head modal-card-head">
            <p className="modal__title modal-card-title">Soporte un mensaje</p>
            <button className="delete" onClick={toggleModal}></button>
          </header>
          <section className="modal-card-body">
            <>Hola desde {company}</>
          </section>
        </div>
      </div>
    </>
  )
}
