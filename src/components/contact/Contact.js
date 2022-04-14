import React from 'react'
import './contact.css'
import useData from '../../hooks/useData'
import { FormContact } from './form/FormContact'

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
            <div className="contact__info-data is-flex mt-5">
              <div className="">
                ima
                <img src="" alt="" />
              </div>
              <div className="">
                <h4 className="contact__info-data-title">Contacto</h4>
                <ul>
                  <li>(CB)73498898</li>
                  <li>(TJ)72968656</li>
                  <li>(SC)69322083</li>
                  <li>info@air.com.bo</li>
                  <li>medinaceli@air.com.bo</li>
                  <li>paolasanchez@air.com.bo</li>
                </ul>
              </div>
            </div>
            <div className="contact__info-data is-flex mt-5">
              <div className="">
                ima
                <img src="" alt="" />
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
