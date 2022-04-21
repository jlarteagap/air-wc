import React, { useState } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { InputField } from './InputField'
import { SelectField } from './SelectField'
import { TextField } from './TextField'
const { API_HOST, A, E, UB } = window.CONFIG

export const FormContact = () => {
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
        onSubmit={values => {
          const url = `${API_HOST}/contactos/?a=${A}&e=${E}&ub=${UB}`

          fetch(url, {
            mode: 'cors',
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams(values)
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
              }, 1000)
            )
        }}
      >
        {formik => (
          <div>
            {status ? (
              <>
                <div className="notification is-success is-light">
                  Su mensaje ha sido enviado correctamente.
                </div>
              </>
            ) : (
              <Form>
                <div className="columns">
                  <div className="column">
                    <InputField label="Nombre" type="text" name="nombre" />
                  </div>
                  <div className="column">
                    <InputField label="Email" type="email" name="email" />
                  </div>
                </div>
                <div className="columns">
                  <div className="column">
                    <InputField label="Teléfono" type="text" name="telefono" />
                  </div>
                  <div className="column">
                    <SelectField name="ciudad" label="Ciudad" />
                  </div>
                </div>
                <TextField label="Mensaje" name="mensaje" />
                <button type="submit" className="button btn__primary mt-3">
                  Enviar mensaje
                </button>
              </Form>
            )}
          </div>
        )}
      </Formik>
    </div>
  )
}
