import React from 'react'
import useData from '../../hooks/useData'

import { SocialIcons } from '../utils/SocialIcons'

function MenuTooltip({ menu, onClick }) {
  const { empresa } = useData()
  return (
    <div className={`menuTooltip p-5 card ${menu ? '' : 'is-hidden'}`}>
      <div className="menuTooltip__body is-flex is-flex-direction-column is-justify-content-space-around">
        <div className="is-flex is-justify-content-end">
          <div
            className="menuTooltip__icon is-flex is-justify-content-center is-align-items-center"
            onClick={onClick}
          >
            X
          </div>
        </div>
        <div className="menuTooltip__header">
          <h3 className="title is-4">Estamos para atenderte</h3>
          <p>Somos expertos en el desarrollo de proyectos tecnológicos.</p>
        </div>
        <div className="">
          <h3 className="menuTooltip__body-titles title is-5 m-0">
            Encuentranos
          </h3>
          <p>{empresa.domicilio}</p>
        </div>
        <div className="">
          <h3 className="menuTooltip__body-titles title is-5 m-0">Email</h3>
          <p>{empresa.email}</p>
        </div>
        <div className="">
          <h3 className="menuTooltip__body-titles title is-5 m-0">Teléfono</h3>
          <p>{empresa.telefono}</p>
        </div>
        <SocialIcons colored={'primary'} size={24} />
      </div>
    </div>
  )
}

export default MenuTooltip
