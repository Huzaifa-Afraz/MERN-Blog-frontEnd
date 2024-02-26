import React from 'react'
import './alert.css'
export default function Alert({alertType, msg, className}) {
  return (
    <div className='d-flex justify-content-center '>
       <div
        className={`toast align-items-center ${className}
        `}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="d-flex">
          <div className={`toast-body text-${alertType} `}>
            <b>{msg}</b>
          </div>
          <button
            type="button"
            className="btn-close me-2 m-auto"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
      </div>
    </div>
  )
}
