import React from 'react'

const Cards = ({image, title}) => {
  return (
    <>
 
     <div  className="card col col-3" style={{width:'18rem'}}>
        <img src={image} className="card-img-top" style={{width:'262pxx', height: '300px'}} alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  )
}

export default Cards
