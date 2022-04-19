import React from 'react'
import './contact.css'
import useData from '../../hooks/useData'
import { FormContact } from './form/FormContact'
import pin from '../../assets/pin.png'
import contact from '../../assets/contact.png'
import decoracion from '../../assets/arrows.svg'

const Contact = () => {
  const { empresa } = useData()
  return (
    <div className="contact">
      <div className="container">
        <div className="columns">
          <div className="contact__info column">
            <h3 className="contact__info-title">Contáctanos ahora</h3>
            <h3 className="contact__info-subtitle is-size-4">
              Adquiere nuestros servicios
            </h3>
            <img src={decoracion} alt="decoracion" />
            <div className="contact__info-data is-flex mt-5">
              <div className="contact__icons">
                <img src={contact} alt="" className="contact__icons-img" />
              </div>
              <div className="">
                <h4 className="contact__info-data-title">Contacto</h4>
                <ul>
                  <li>{empresa.telefono}</li>
                  <li>{empresa.email}</li>
                </ul>
              </div>
            </div>
            <div className="contact__info-data is-flex mt-5">
              <div className="contact__icons">
                <img src={pin} alt="" className="contact__icons-img" />
              </div>
              <div className="">
                <h4 className="contact__info-data-title">Dirección</h4>
                <div dangerouslySetInnerHTML={{ __html: empresa.domicilio }} />
              </div>
            </div>
          </div>
          <div className="contact__form column">
            <FormContact />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
