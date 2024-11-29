import React from 'react'

function Card(props) {
  return (
    <>
    <div className='image'>
        <img src={props.image} alt="" />
    </div>
      <h1>{props.title}</h1>
      <p>{props.price}</p>
    </>
  )
}

export default Card
