import React, { useState, useEffect } from 'react'

const Search = ({ initial, setFiltered }) => {
  const [filter, setFilter] = useState({
    name: '',
    sites: '',
    type: '',
    status: ''
  })

  const handleChange = e => {
    setFilter({
      ...filter,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    let filtered = initial.filter(item => {
      if (!filter.name) return true
      return new RegExp(filter.name, 'i').test(item.name)
    })

    if (filter.type) {
      filtered = filtered.filter(item => item.type === filter.type)
    }

    if (filter.status) {
      filtered = filtered.filter(item => item.status === filter.status)
    }

    if (filter.sites) {
      filtered.sort((a, b) => {
        if (a.sites < b.sites) return filter.sites === 'desc' ? 1 : -1
        if (a.sites > b.sites) return filter.sites === 'desc' ? -1 : 1
        return 0
      })
    }

    setFiltered(filtered)
  }, [filter, initial, setFiltered])

  return (
    <div className='row justify-content-center mt-5'>
      <div className='col-12 col-sm-10' style={{ maxWidth: '600px' }}>
        <form>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              name='name'
              onChange={handleChange}
              autoComplete='off'
              value={filter.name}
              placeholder='search by name'
            />
          </div>
          <div className='form-row'>
            <div className='col-12 col-sm-4'>
              <div className='form-group'>
                <select
                  className='form-control form-control-sm'
                  name='sites'
                  onChange={handleChange}
                  value={filter.sites}
                >
                  <option value=''>Sort by number of sites</option>
                  <option value='asc'>Ascending</option>
                  <option value='desc'>Descending</option>
                </select>
              </div>
            </div>
            <div className='col-12 col-sm-4'>
              <div className='form-group'>
                <select
                  className='form-control form-control-sm'
                  name='type'
                  onChange={handleChange}
                  value={filter.type}
                >
                  <option value=''>Display by type</option>
                  <option value='email'>Email</option>
                  <option value='tag_manager'>Tag Manager</option>
                  <option value='dmp_crm'>DMP CRM</option>
                  <option value='analytics'>Analytics</option>
                  <option value='heatmap'>Heatmap</option>
                </select>
              </div>
            </div>
            <div className='col-12 col-sm-4'>
              <div className='form-group'>
                <select
                  className='form-control form-control-sm'
                  name='status'
                  onChange={handleChange}
                  value={filter.status}
                >
                  <option value=''>Display by status</option>
                  <option value='enable'>Enabled</option>
                  <option value='disable'>Disabled</option>
                  <option value='blocked'>Blocked</option>
                </select>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Search
