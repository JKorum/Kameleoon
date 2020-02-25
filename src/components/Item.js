import React from 'react'

const Item = ({ item: { name, sites, type, status } }) => {
  return (
    <div className='col-12 col-sm-4 p-1 d-flex align-items-stretch'>
      <div className='card flex-grow-1'>
        <div className='card-body'>
          <h1 className='h6 text-right'>
            <span className='badge badge-primary'>{status}</span>
          </h1>
          <h2 className='h5 card-title'>{name}</h2>
          <p className='card-text'>
            Type: <span className='font-weight-bold'>{type}</span>
          </p>
          <p className='card-text'>
            Number of sites: <span className='font-weight-bold'>{sites}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Item
