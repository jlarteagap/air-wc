import React, { useEffect, useState } from 'react'
// import Slider from 'react-animated-slider'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import 'react-animated-slider/build/horizontal.css'
import './slide.css'
import { getSlide } from '../../api/Api'
import useData from '../../hooks/useData'
function Slide() {
  const { updateSlide } = useData()
  const [slide, setSlide] = useState([])

  useEffect(() => {
    ;(async () => {
      try {
        const res = await getSlide('portada')
        setSlide(res.records)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])
  const options = {
    arrows: false,
    rewind: true,
    pagination: false,
    interval: 3000,
    autoplay: true,
    lazyLoad: 'sequential',
    perPage: 1,
    perMove: 1,
    pauseOnHover: false,
    pauseOnFocus: false,
    type: 'loop',
    breakpoints: {
      640: {
        arrows: true
      }
    }
  }
  useEffect(() => {
    if (slide.length > 0) {
      updateSlide()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slide])
  return (
    <div className="slide__content">
      {slide.length > 0 && (
        <Splide
          className="slide__carrousel"
          aria-label="Testimonios"
          options={options}
        >
          {slide.map((item, index) => {
            return (
              <SplideSlide
                key={index}
                className="slider__content"
                style={{
                  backgroundImage: `url('${item.URL}')`
                }}
              >
                <div className="inner">
                  <div dangerouslySetInnerHTML={{ __html: item.DESCRIPCION }} />
                </div>
              </SplideSlide>
            )
          })}
        </Splide>
      )}
    </div>
  )
}

export default Slide
