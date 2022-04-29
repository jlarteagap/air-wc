import { useField, ErrorMessage } from 'formik'
import React from 'react'
export const SelectField = ({ label, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <div className="form__select select is-expanded">
      <select
        className={`select__expanded ${
          meta.touched && meta.error && 'is-danger'
        }`}
        {...props}
        {...field}
      >
        <option value="">Seleccionar ciudad</option>
        <option value="Santa Cruz" label="Santa Cruz">
          Santa Cruz
        </option>
        <option value="La Paz" label="La Paz">
          La Paz
        </option>
        <option value="Cochabamba" label="Cochabamba">
          Cochabamba
        </option>
        <option value="Tarija" label="Tarija">
          Tarija
        </option>
        <option value="Beni" label="Beni">
          Pando
        </option>
        <option value="Pando" label="Pando">
          Pando
        </option>
        <option value="Potosi" label="Potosi">
          Potosi
        </option>
        <option value="Chuquisaca" label="Chuquisaca">
          Chuquisaca
        </option>
        <option value="Oruro" label="Oruro">
          Oruro
        </option>
      </select>

      <ErrorMessage
        component="div"
        name={field.name}
        className="help is-danger"
      />
    </div>
  )
}
