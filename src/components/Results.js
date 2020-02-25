import React from 'react'
import Item from './Item'

const Results = ({ filtered }) => {
  return (
    <div className='row'>
      {filtered.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </div>
  )
}

export default Results
