import React from 'react'
import { useField, ErrorMessage } from 'formik'
export const InputField = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <div>
      <label className="label">{label}</label>
      <input
        className={`input ${meta.touched && meta.error && 'is-danger'}`}
        autoComplete="off"
        {...field}
        {...props}
      />
      <ErrorMessage
        component="div"
        name={field.name}
        className="help is-danger"
      />
    </div>
  )
}
