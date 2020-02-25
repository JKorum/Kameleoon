import React, { useState, Fragment } from 'react'
import Search from './Search'
import Results from './Results'
import Header from './Header'
import data from '../data/items.json'

const App = () => {
  const [initial, _] = useState(data)
  const [filtered, setFiltered] = useState(data)

  return (
    <Fragment>
      <Header />
      <div className='container'>
        <Search initial={initial} setFiltered={setFiltered} />
        <hr />
        <Results filtered={filtered} />
      </div>
    </Fragment>
  )
}

export default App
