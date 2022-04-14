import React from 'react'
import {
  FaFacebookF,
  FaGooglePlusG,
  FaLinkedinIn,
  FaInstagram,
  FaTelegram,
  FaTwitter,
  FaYoutube
} from 'react-icons/fa'
import useData from '../../hooks/useData'

export const SocialIcons = ({ colored, size }) => {
  const { empresa } = useData()

  return (
    <div className="social is-flex">
      {empresa.facebook && (
        <a
          href={empresa.facebook}
          className={`social__icons is-flex is-justify-content-center is-align-items-center`}
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookF
            size={size}
            className={`social__icon ${colored ? `${colored}` : ''}`}
          />
        </a>
      )}
      {empresa.instagram && (
        <a
          href={empresa.instagram}
          className={`social__icons is-flex is-justify-content-center is-align-items-center`}
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram
            size={size}
            className={`social__icon ${colored ? `${colored}` : ''}`}
          />
        </a>
      )}
      {empresa.linkedin && (
        <a
          href={empresa.linkedin}
          className={`social__icons is-flex is-justify-content-center is-align-items-center`}
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn
            size={size}
            className={`social__icon ${colored ? `${colored}` : ''}`}
          />
        </a>
      )}
      {empresa.twitter && (
        <a
          href={empresa.twitter}
          className={`social__icons is-flex is-justify-content-center is-align-items-center `}
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter
            size={size}
            className={`social__icon ${colored ? `${colored}` : ''}`}
          />
        </a>
      )}
      {empresa.youtube && (
        <a
          href={empresa.youtube}
          className={`social__icons is-flex is-justify-content-center is-align-items-center`}
          target="_blank"
          rel="noreferrer"
        >
          <FaYoutube
            size={size}
            className={`social__icon ${colored ? `${colored}` : ''}`}
          />
        </a>
      )}
      {empresa.google && (
        <a
          href={empresa.google}
          className={`social__icons is-flex is-justify-content-center is-align-items-center`}
          target="_blank"
          rel="noreferrer"
        >
          <FaGooglePlusG
            size={size}
            className={`social__icon ${colored ? `${colored}` : ''}`}
          />
        </a>
      )}
      {empresa.telegram && (
        <a
          href={empresa.google}
          className={`social__icons is-flex is-justify-content-center is-align-items-center`}
          target="_blank"
          rel="noreferrer"
        >
          <FaTelegram
            size={size}
            className={`social__icon ${colored ? `${colored}` : ''}`}
          />
        </a>
      )}
    </div>
  )
}
