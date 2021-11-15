import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import ReactDOM from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
      <Router> 
        <App/>
      </Router >,
    document.getElementById('app')
  )
})