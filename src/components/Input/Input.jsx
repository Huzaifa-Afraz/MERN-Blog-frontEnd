import React from 'react'
import './Input.css'
export default function Input({label,type,placeholder, value, onChange, name}) {
  return (
    <div className='__maininput'>
      <label>{label}</label>
      <input type={type} placeholder={placeholder} value={value} onChange={onChange} name={name}/>
    </div>
  )
}
