import React, { useEffect, useState } from 'react'
import './team.css'
import { getData } from '../../api/Api'

function Team() {
  const [team, setTeam] = useState([])
  useEffect(() => {
    ;(async () => {
      try {
        const res = await getData('personal')
        setTeam(res)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  return (
    <>
      {team.length > 0 && (
        <div className="team">
          <div className="container">
            <div className="team__head is-flex is-flex-direction-column is-align-items-center">
              <h3 className="team__head-title title is-4 m-0">
                Nuestro equipo
              </h3>
              <p className="team__head-subtitle is-size-3 is-size-6-mobile has-text-centered mt-2 has-text-weight-bold">
                Siempre atentos para brindarte el mejor servicio
              </p>
            </div>
            <div className="team__body is-flex is-justify-content-space-around">
              {team.map(personal => {
                return (
                  <div
                    className="team__item has-text-centered p-5"
                    key={personal.NOMBRE}
                  >
                    <img
                      src={personal.FOTO}
                      alt={personal.NOMBRE}
                      className="team__item-img"
                    />
                    <h4 className="team__item-position has-text-weight-bold is-size-5">
                      {personal.CARGO}
                    </h4>
                    <p className="team__item-name">{personal.NOMBRE}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Team
