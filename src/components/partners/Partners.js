import React from 'react'
import './partners.css'
import useData from '../../hooks/useData'
import decoracion from '../../assets/arrows.svg'
import rocket from '../../assets/rocket.png'
import people from '../../assets/people.png'
import partners from '../../assets/partners.png'

function Partners() {
  const { empresa } = useData()
  return (
    <div className="partners">
      <div className="container">
        <div className="partners__content is-flex is-justify-content-center ">
          <div className="partners__header is-flex is-flex-direction-column is-align-items-center">
            <h3 className="partners__header-title title is-4 m-0">Partners</h3>
          </div>
        </div>
        <div className="is-flex is-justify-content-center my-5">
          {' '}
          <img src={partners} loading="lazy" width="500px" />
        </div>
        <div className="my-4">
          <h4 className="partners__trayectoria-title title is-5 has-text-weight-bold">
            Trayectoria
          </h4>
        </div>
        <div className="trayectoria columns">
          <div className="trayectoria__texts column is-6">
            <p className="is-size-3 has-text-weight-bold">
              Contamos con más de 11 años de experiencia dentro del ámbito de
              las T.I., brindando soluciones
            </p>
            <img src={decoracion} />
            <div
              className="mt-5"
              dangerouslySetInnerHTML={{ __html: empresa.descripcion }}
            ></div>
            <a className="button mt-5" href="#contact">
              Contacto
            </a>
          </div>
          <div className="column is-3">
            <div className="trayectoria__icon">
              <img src={rocket} loading="lazy" />
            </div>
            <div className="trayectoria__counter is-size-1 has-text-weight-bold mb-4">
              300<span>+</span>
            </div>
            <p>
              Con más de 1000 puntos de red, más de 1000 puntos eléctricos, más
              de 200 instalaciones de sistemas de video vigilancia.
            </p>
          </div>
          <div className="column is-3">
            <div className="trayectoria__icon">
              <img loading="lazy" src={people} alt="" />
            </div>
            <div className="trayectoria__counter is-size-1 has-text-weight-bold mb-4">
              90<span>+</span>
            </div>
            <p>
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
