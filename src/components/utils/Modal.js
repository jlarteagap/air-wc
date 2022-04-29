import React from 'react'
import iconSupport from '../../assets/icono_soporte.png'
import { FormModal } from './form/FormModal'
import './modal.css'
export const Modal = ({ modal, toggleModal, company }) => {
  return (
    <>
      <div className={`modal ${modal && 'is-active'}`}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal__head modal-card-head">
            <p className="modal__title modal-card-title is-flex is-align-items-center">
              <img
                src={iconSupport}
                width="32px"
                className="mr-3"
                alt={`soporte para ${company}`}
              />
              Soporte para {company}
            </p>
            <button className="delete" onClick={toggleModal}></button>
          </header>
          <section className="modal-card-body">
            <div className="mb-5">
              <p>
                Para solicitar soporte para {company} puedes enviarnos un
                Whatsapp o llenando el formulario de mas abajo.
              </p>
            </div>

            <FormModal
              toggleModal={toggleModal}
              link="soporte"
              tipo={company}
            />
          </section>
        </div>
      </div>
    </>
  )
}
