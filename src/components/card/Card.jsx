import React from 'react'

export default function Card({key, title, descreption}) {
  return (
   <>
        <div className="card"key={key} style={{width: 18+'rem'}}>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{descreption.substr(0, 30)+'...'}</p>
  </div>
</div>
   </>
  )
}
