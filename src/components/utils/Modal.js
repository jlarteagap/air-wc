import React from 'react'
import { FormContact } from './form/FormContact'
import { FaWhatsapp } from 'react-icons/fa'
export const Modal = ({ modal, toggleModal, company }) => {
  return (
    <>
      <div className={`modal ${modal && 'is-active'}`}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal__head modal-card-head">
            <p className="modal__title modal-card-title">
              Soporte para {company}
            </p>
            <button className="delete" onClick={toggleModal}></button>
          </header>
          <section className="modal-card-body">
            <div className="">
              <p>
                Para solicitar soporte para {company} puedes enviarnos un
                Whatsapp o llenando el formulario de mas abajo.
              </p>
              <div className="has-text-centered mt-5">
                <a
                  className="button is-success"
                  href={`https://api.whatsapp.com/send?phone=59173498898&text=Solicito%20soporte%20${company}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaWhatsapp size={32} className="mr-3" /> Enviar Whatsapp
                </a>
              </div>
            </div>
            <hr />
            <FormContact
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
