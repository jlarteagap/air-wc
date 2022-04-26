import React from 'react'
import { useField, ErrorMessage } from 'formik'

export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <div className="mt-5 pt-5">
      <label className="label">{label}</label>
      <textarea
        className={`textarea ${meta.touched && meta.error && 'is-danger'}`}
        rows="5"
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
