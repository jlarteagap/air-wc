import React, { useEffect, useState } from 'react'
import './brands.css'
import { getSlide } from '../../api/Api'
import useData from '../../hooks/useData'
import { Splide, SplideSlide } from '@splidejs/react-splide'

function Brands() {
  const { updateBrands } = useData()
  const [brands, setBrands] = useState([])
  useEffect(() => {
    ;(async () => {
      try {
        const res = await getSlide('marcas')
        setBrands(res.records)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  useEffect(() => {
    if (brands.length > 0) {
      updateBrands()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [brands])

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
    <div className="brands mb-5" id="marcas">
      {brands && (
        <div className="container">
          <div className="brands__header has-text-centered">
            <h3 className="brands__header-title has-text-weight-bold">
              NUESTRAS MARCAS
            </h3>
          </div>
          <Splide className="brands__carrousel" options={mainOptions}>
            {brands.map(brand => {
              return (
                <SplideSlide key={brand.ID_FOTO}>
                  <img src={brand.URL} alt={brand.ID_FOTO} />
                </SplideSlide>
              )
            })}
          </Splide>
        </div>
      )}
    </div>
  )
}
export default Brands
