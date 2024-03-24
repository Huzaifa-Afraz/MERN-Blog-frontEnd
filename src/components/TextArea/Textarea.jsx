import React from 'react'

export default function Textarea({label, placeholder, name}) {
  return (
    <div>
      <div className="mb-3">
  <label for="TextArea" className="form-label">{label}</label>
  <textarea className="form-control" id="TextArea" rows="3"  placeholder={placeholder} name={name}></textarea>
</div>
    </div>
  )
}
