import React from 'react'
import './partners.css'
import useData from '../../hooks/useData'
import decoracion from '../../assets/arrows.svg'
import rocket from '../../assets/rocket.png'
import people from '../../assets/people.png'
import { PartnersIcons } from './PartnersIcons'

function Partners() {
  const { empresa } = useData()

  return (
    <div className="partners" id="partners">
      <div className="container">
        <PartnersIcons />

        <div className="my-4">
          <h4 className="partners__trayectoria-title title is-5 has-text-weight-bold">
            Trayectoria
          </h4>
        </div>
        <div className="trayectoria columns is-desktop">
          <div className="trayectoria__texts column is-6">
            <p className="is-size-3 is-size-6-mobile has-text-weight-bold pb-5">
              Contamos con más de 11 años de experiencia dentro del ámbito de
              las T.I., brindando soluciones
            </p>
            <img src={decoracion} alt="/\/\/\" />
            <div
              className="mt-5"
              dangerouslySetInnerHTML={{ __html: empresa.descripcion }}
            ></div>
            <a className="button mt-5 btn__primary" href="#contacto">
              Contacto
            </a>
          </div>
          <div className="trayectoria__counters column is-3">
            <div className="trayectoria__icon">
              <img src={rocket} loading="lazy" alt="trayectoria" />
            </div>
            <div className="trayectoria__counter is-size-1 has-text-weight-bold mb-4 has-text-weight-bold">
              300<span>+</span>
            </div>
            <p className="has-text-weight-semibold">
              Con más de 1000 puntos de red, más de 1000 puntos eléctricos, más
              de 200 instalaciones de sistemas de video vigilancia.
            </p>
          </div>
          <div className="trayectoria__counters column is-3">
            <div className="trayectoria__icon">
              <img loading="lazy" src={people} alt="user" />
            </div>
            <div className="trayectoria__counter is-size-1 has-text-weight-bold mb-4">
              90<span>+</span>
            </div>
            <p className="has-text-weight-semibold">
              Ademas de 100 instalaciones de sistemas de climatización, como
              también la provisión de equipos informáticos y soporte técnico de
              TI.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Partners
