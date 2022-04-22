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
    <>
      {services.length > 0 && (
        <ul>
          <h3 className="footer__links-title is-size-5 pb-3">IT Services</h3>
          {services.map(item => {
            return <li key={item.ID_CONTENIDO}>{item.TITULO}</li>
          })}
        </ul>
      )}
    </>
  )
}
