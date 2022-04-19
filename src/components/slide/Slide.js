import React, { useEffect, useState } from 'react'
import Slider from 'react-animated-slider'
import 'react-animated-slider/build/horizontal.css'
import './slide.css'
import { getSlide } from '../../api/Api'

function Slide() {
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

  return (
    <div className="slide__content">
      <Slider className="slider-wrapper" infinite autoplay={3000} touched>
        {slide.map((item, index) => (
          <div
            key={index}
            className="slider-content"
            style={{
              background: `url('${item.URL}') no-repeat center center`
            }}
          >
            <div className="inner">
              <h1>{item.title}</h1>
              <div dangerouslySetInnerHTML={{ __html: item.DESCRIPCION }} />
              <button className="button is-success">Button</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Slide
