import React from 'react'
import './contact.css'
import useData from '../../hooks/useData'
import { FormContact } from '../utils/form/FormContact'
import pin from '../../assets/pin.png'
import contact from '../../assets/contact.png'
import decoracion from '../../assets/arrows.svg'

const Contact = () => {
  const { empresa } = useData()

  return (
    <div className="contact" id="contacto">
      <div className="container">
        <div className="columns">
          <div className="contact__info column">
            <h3 className="contact__info-title">Contáctanos ahora</h3>
            <h3 className="contact__info-subtitle is-size-4 is-size-5-mobile">
              Adquiere nuestros servicios
            </h3>
            <img src={decoracion} alt="decoracion" />
            <div className="contact__info-data is-flex mt-5">
              <div className="contact__icons is-flex is-justify-content-center is-align-items-center">
                <img src={contact} alt="" className="contact__icons-img " />
              </div>
              <div className="">
                <h4 className="contact__info-data-title">Contacto</h4>
                <ul>
                  <li className="has-text-weight-semibold">
                    {empresa.telefono}
                  </li>
                  <li className="has-text-weight-semibold">{empresa.email}</li>
                </ul>
              </div>
            </div>
            <div className="contact__info-data is-flex mt-5">
              <div className="contact__icons is-flex is-justify-content-center is-align-items-center">
                <img src={pin} alt="" className="contact__icons-img" />
              </div>
              <div className="">
                <h4 className="contact__info-data-title">Dirección</h4>
                <div
                  className="has-text-weight-semibold"
                  dangerouslySetInnerHTML={{ __html: empresa.domicilio }}
                />
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
