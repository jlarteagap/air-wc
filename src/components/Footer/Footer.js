import React from 'react'
import './Footer.css'
import useData from '../../hooks/useData'
import { SocialIcons } from '../utils/SocialIcons'
import { FooterServices } from './FooterServicios'
import airWhite from '../../assets/air-logo-w.svg'

const Footer = () => {
  const { empresa } = useData()

  const date = new Date()
  return (
    <div className="footer">
      <div className="footer__social py-3">
        <div className="container is-flex is-justify-content-end">
          <SocialIcons size={16} />
        </div>
      </div>
      <div className="footer__info container pb-5">
        <div className="mt-5">
          <img src={airWhite} alt="A.I.R" className="footer__logo" />
        </div>
        <div className="footer__info-content columns">
          <div className="footer__about column is-4">
            <div
              dangerouslySetInnerHTML={{ __html: empresa.descripcion }}
            ></div>
          </div>
          <div className="footer__links column is-8">
            <div className="is-flex is-justify-content-space-around">
              <div className="footer__links-items">
                <h3 className="footer__links-title is-size-5 pb-3">
                  IT Services
                </h3>
                <FooterServices />
              </div>
              <div className="footer__links-items">
                <h3 className="footer__links-title is-size-5 pb-3">
                  Import Links
                </h3>
                <ul>
                  <li>Sobre nosotros</li>
                  <li>Equipo</li>
                  <li>Novedades</li>
                  <li>Dirección</li>
                </ul>
              </div>
              <div className="footer__links-items">
                <h3 className="footer__links-title is-size-5 pb-3">Contacto</h3>
                <ul>
                  <li>{empresa.telefono}</li>
                  <li>{empresa.email}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyrights container mt-5">
        <div className="has-text-centered">
          {date.getFullYear()} .All Rights Reserved With Love {empresa.nombre}
        </div>
      </div>
    </div>
  )
}

export default Footer
