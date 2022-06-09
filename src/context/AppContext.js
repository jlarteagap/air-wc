import React, { createContext, useEffect, useState } from 'react'

export const AppContext = createContext({
  empresa: undefined
})

const { API_HOST, A, E, UB } = window.CONFIG

export function AppProvider({ children }) {
  const [empresa, setEmpresa] = useState([])
  const [serviceContext, setServiceContext] = useState(false)
  const [testimonialContext, setTestimonialContext] = useState(false)
  const [contactContext, setContactContext] = useState(false)
  const [partnersContext, setPartnersContext] = useState(false)
  const [clientsContext, setClientsContext] = useState(false)
  const [brandsContext, setBrandsContext] = useState(false)
  const [slideContext, setSlideContext] = useState(false)
  const [splash, setSplash] = useState(true)

  setTimeout(() => {
    setSplash(false)
  }, 3000)

  useEffect(() => {
    const url = `${API_HOST}/empresa/?a=${A}&e=${E}&ub=${UB}`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setEmpresa(data.records)
      })
  }, [])

  const updateService = () => {
    setServiceContext(true)
  }
  const updateTestimonial = () => {
    setTestimonialContext(true)
  }
  const updateContact = () => {
    setContactContext(true)
  }
  const updatePartners = () => {
    setPartnersContext(true)
  }
  const updateClients = () => {
    setClientsContext(true)
  }
  const updateBrands = () => {
    setBrandsContext(true)
  }
  const updateSlide = () => {
    setSlideContext(true)
  }
  const value = {
    empresa,
    splash,
    updateService,
    updateTestimonial,
    updateContact,
    updatePartners,
    updateClients,
    updateBrands,
    updateSlide,
    serviceContext,
    testimonialContext,
    contactContext,
    partnersContext,
    clientsContext,
    brandsContext,
    slideContext
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
