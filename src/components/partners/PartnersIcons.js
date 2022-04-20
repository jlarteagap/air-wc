import React, { useEffect, useState } from 'react'
import { getSlide } from '../../api/Api'

export const PartnersIcons = () => {
  const [partners, setPartners] = useState([])

  useEffect(() => {
    ;(async () => {
      try {
        const res = await getSlide('partners')
        setPartners(res.records)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])
  return (
    <>
      {partners.map(img => {
        return (
          <div className="partners-icons" key={img.ID_FOTO}>
            <img src={img.URL} alt={img.ID_FOTO} />
          </div>
        )
      })}
    </>
  )
}
