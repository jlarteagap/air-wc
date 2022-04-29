import React, { useState } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { InputField } from './InputField'
import { SelectField } from './SelectField'
import { TextField } from './TextField'
import { FaWhatsapp } from 'react-icons/fa'
const { API_HOST, A, E, UB } = window.CONFIG

export const FormModal = ({ toggleModal, link, tipo }) => {
  const [status, setStatus] = useState(false)

  const validate = Yup.object({
    nombre: Yup.string().required('Nombre son requeridos'),
    email: Yup.string()
      .email('Ingrese un correo valido')
      .required('En necesario un correo electrónico'),
    telefono: Yup.number()
      .typeError('Ingrese solo números')
      .min(7, 'Ingrese un número de teléfono válido')
      .required('Ingrese un teléfono'),
    mensaje: Yup.string().required('Necesitamos un mensaje'),
    ciudad: Yup.string().required('Seleccione una ciudad')
  })

  return (
    <div>
      <Formik
        initialValues={{
          nombre: '',
          telefono: '',
          email: '',
          ciudad: '',
          mensaje: ''
        }}
        validationSchema={validate}
        onSubmit={(values, { resetForm }) => {
          let data
          if (tipo) {
            console.log(tipo)
            data = { tipo, ...values }
          } else {
            data = values
          }

          const url = `${API_HOST}/${link}/?a=${A}&e=${E}&ub=${UB}`
          fetch(url, {
            mode: 'cors',
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams(data)
          })
            .then(response => response.json())
            .then(data => {
              if (data.message === 'OK') {
                setStatus(!status)
              }
            })
            .then(
              setTimeout(() => {
                setStatus(false)
              }, 5000)
            )
            .then(resetForm())
        }}
      >
        {formik => (
          <div>
            {status ? (
              <>
                <div className="notification is-success is-light">
                  Su mensaje ha sido enviado correctamente.
                </div>
                {tipo && (
                  <button className="button is-danger" onClick={toggleModal}>
                    Cerrar
                  </button>
                )}
              </>
            ) : (
              <Form className="modal__form">
                <div className="form__item">
                  <InputField type="text" name="nombre" placeholder="Nombre" />
                </div>
                <div className="form__item">
                  <InputField type="email" name="email" placeholder="Email" />
                </div>
                <div className="form__item">
                  <InputField
                    type="text"
                    name="telefono"
                    placeholder="Teléfono"
                  />
                </div>
                <div className="form__item">
                  <SelectField name="ciudad" placeholder="Ciudad" />
                </div>
                <div className="form__textarea">
                  <TextField name="mensaje" placeholder="Mensaje" />
                </div>

                <div className="form__button">
                  <a
                    className="button is-success mr-3"
                    href={`https://api.whatsapp.com/send?phone=59173498898&text=Solicito%20soporte%20para%20equipos%20${tipo}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaWhatsapp size={32} />
                  </a>
                  <button type="submit" className="button btn__primary">
                    Enviar mensaje
                  </button>
                </div>
              </Form>
            )}
          </div>
        )}
      </Formik>
    </div>
  )
}
