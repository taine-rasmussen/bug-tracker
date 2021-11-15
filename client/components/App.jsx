import React from 'react'
import { Route } from 'react-router-dom'

// Components
import Landing from './Landing'
import Dashboard from './Dashboard'


function App () {


  return (
      <div className='app'>
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/' component={Landing} />
      </div>
  )
}

export default App
