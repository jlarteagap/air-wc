import React, { useEffect, useState } from 'react'
import { getSlide } from '../../api/Api'
import useData from '../../hooks/useData'

export const PartnersIcons = () => {
  const { updatePartners } = useData()
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

  useEffect(() => {
    if (partners.length > 0) {
      updatePartners()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [partners])
  return (
    <>
      {partners.length > 0 && (
        <>
          <div className="partners__content is-flex is-justify-content-center ">
            <div className="partners__header is-flex is-flex-direction-column is-align-items-center">
              <h3 className="partners__header-title title is-4 m-0">
                Partners
              </h3>
            </div>
          </div>
          <div className="partners__icons is-flex is-justify-content-center my-5">
            {partners.map(img => {
              return (
                <div className="partners-icons" key={img.ID_FOTO}>
                  <img src={img.URL} alt={img.ID_FOTO} />
                </div>
              )
            })}
          </div>
        </>
      )}
    </>
  )
}
