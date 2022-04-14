import { Formik, Form } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import { InputField } from './InputField'
import { TextField } from './TextField'

export const FormContact = () => {
  const validate = Yup.object({
    nombre: Yup.string().required('Nombre son requeridos'),
    email: Yup.string()
      .email('Ingrese un correo valido')
      .required('En necesario un correo electrónico'),
    telefono: Yup.string().required('Ingrese un teléfono'),
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
      >
        {formik => (
          <div>
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
                <div className="column"></div>
              </div>
              <TextField label="Mensaje" name="mensaje" />
              <button type="submit" className="button is-success">
                Enviar mensaje
              </button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  )
}
