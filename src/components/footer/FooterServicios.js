import React, { useState, useEffect } from 'react'
import { getData } from '../../api/Api'

export const FooterServices = () => {
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
    <ul>
      {services.map(item => {
        return <li key={item.ID_CONTENIDO}>{item.TITULO}</li>
      })}
    </ul>
  )
}
