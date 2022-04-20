import React, { useEffect, useState } from 'react'
import { getData } from '../../api/Api'
import './services.css'

import decoracion from '../../assets/arrows.svg'

function Services() {
  const [services, setServices] = useState([])

  useEffect(() => {
    ;(async () => {
      try {
        const res = await getData('servicios')
        setServices(res.records.reverse())
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  return (
    <div className="services">
      {services && (
        <div className="container">
          <div className="services__content is-flex is-justify-content-center ">
            <div className="services__header is-flex is-flex-direction-column is-align-items-center">
              <h3 className="services__header-title title is-4 m-0">
                Servicios
              </h3>
              <p className="services__header-subtitle is-size-3 is-size-6-mobile has-text-centered has-text-weight-bold mt-2 pb-5">
                Agregamos valor a tu empresa a traves de tecnología emergente,
                proporcionando soluciones integrales.
              </p>
              <img src={decoracion} alt="/\/\/\" />
            </div>
          </div>

          <div className="services__items">
            {services.map(item => {
              return (
                <div className="services__item" key={item.ID_CONTENIDO}>
                  <div className="services__item-content is-flex is-align-items-center">
                    <div className="services__item-icon">
                      <img
                        loading="lazy"
                        className="services__item-img"
                        src={item.ICONO}
                        alt={item.TITULO}
                      />
                    </div>
                    <div className="services__item-title has-text-weight-bold">
                      {item.TITULO}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export default Services
