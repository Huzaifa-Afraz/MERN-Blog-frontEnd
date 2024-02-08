import React from 'react'

export default function Button({btntype,btnName}) {
  return (
    <div>
      <button className={`btn btn-${btntype}`}>{btnName}</button>
    </div>
  )
}
