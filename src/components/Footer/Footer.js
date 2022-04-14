import React from 'react'
import './Footer.css'
import useData from '../../hooks/useData'
import { SocialIcons } from '../utils/SocialIcons'
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
      <div className="container">
        <div className="copyrights has-text-centered">
          {date.getFullYear()} .All Rights Reserved With Love {empresa.nombre}
        </div>
      </div>
    </div>
  )
}

export default Footer
