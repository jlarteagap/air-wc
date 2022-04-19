import React from 'react'
// import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import './client.css'
import clients from '../../assets/clients.png'
const Clients = () => {
  // const mainOptions = {
  //   arrows: false,
  //   rewind: true,
  //   gap: '1rem',
  //   autoplay: true,
  //   perMove: 1,
  //   type: 'loop'
  // }
  return (
    <div className="clients">
      <div className="container">
        <center>
          <img src={clients} loading="lazy" width="800px" alt="Clientes" />
        </center>
        {/* <Splide
          aria-label="My Favorite Images"
          options={mainOptions}
          className="clientes__carousel"
        >
          <SplideSlide>
            <img src="image1.jpg" alt="Image 1" />
          </SplideSlide>
          <SplideSlide>
            <img src="image2.jpg" alt="Image 2" />
          </SplideSlide>
        </Splide> */}
      </div>
    </div>
  )
}

export default Clients
