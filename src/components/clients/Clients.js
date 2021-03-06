import React, { useEffect, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import './client.css'
import useData from '../../hooks/useData'
import { getSlide } from '../../api/Api'

const Clients = () => {
  const { updateClients } = useData()
  const [clients, setClients] = useState([])

  useEffect(() => {
    ;(async () => {
      try {
        const res = await getSlide('clientes')
        setClients(res.records)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  useEffect(() => {
    if (clients.length > 0) {
      updateClients()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clients])

  const mainOptions = {
    arrows: false,
    rewind: true,
    gap: '1rem',
    autoplay: true,
    perMove: 1,
    type: 'loop',
    perPage: 6,
    breakpoints: {
      640: {
        perPage: 3
      },
      768: {
        perPage: 4
      }
    }
  }

  return (
    <>
      {clients.length > 0 && (
        <div className="clients" id="clientes">
          <div className="container">
            <div className="clients__header has-text-centered">
              <h3 className="clients__header-title has-text-weight-bold">
                CLIENTES QUE CONFIAN
              </h3>
            </div>
            <Splide
              aria-label="Clientes"
              options={mainOptions}
              className="clientes__carousel"
            >
              {clients.map(icon => {
                return (
                  <SplideSlide key={icon.ID_FOTO}>
                    <img src={icon.URL} alt={icon.ID_FOTO} />
                  </SplideSlide>
                )
              })}
            </Splide>
          </div>
        </div>
      )}
    </>
  )
}

export default Clients
