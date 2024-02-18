import React from 'react'

export default function Alert() {
  return (
    <div className='d-flex justify-content-center'>
       <div
        className="toast show  align-items-center position-absolute top-50"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="d-flex">
          <div className="toast-body text-danger">
            Hello, world! This is a toast message.
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
