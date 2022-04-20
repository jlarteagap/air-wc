import React, { useEffect, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { getData } from '../../api/Api'
import './testimonials.css'
import profile from '../../assets/profile.png'
const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([])
  useEffect(() => {
    ;(async () => {
      try {
        const res = await getData('testimonios')
        setTestimonials(res)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  //  Carousel options
  const options = {
    arrows: false,
    rewind: true,
    gap: '1rem',
    autoplay: true,
    perPage: 1,
    perMove: 1,
    type: 'loop'
  }

  return (
    <div className="testimonials">
      <div className="container is-flex is-justify-content-center">
        <Splide
          className="testimonial__carrousel"
          options={options}
          aria-label="Testimonios"
        >
          {testimonials.map(testimonial => {
            return (
              <SplideSlide
                className="testimonial__carrousel-item is-flex is-flex-direction-column is-align-items-center"
                key={testimonial.id_mensaje}
              >
                <div className="testimonial__carrousel-photo">
                  <img src={profile} loading="lazy" alt={testimonial.nombre} />
                </div>
                <p className="testimonial__carrousel-message is-size-2 is-size-6-mobile has-text-centered has-text-weight-bold my-5 py-5">
                  {testimonial.mensaje}
                </p>
                <p className="is-size-5 has-text-weight-bold mt-5">
                  {testimonial.nombre}
                </p>
                <div>{testimonial.cargo}</div>
              </SplideSlide>
            )
          })}
        </Splide>
      </div>
    </div>
  )
}

export default Testimonials
