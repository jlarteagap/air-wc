import React, { useEffect, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import './client.css'

import { getSlide } from '../../api/Api'
const Clients = () => {
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

  console.log(clients)
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
    <div className="clients">
      {clients && (
        <div className="container">
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
      )}
    </div>
  )
}

export default Clients
