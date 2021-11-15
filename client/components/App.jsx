import React, { useState, useEffect} from 'react'
import fire from '../fire'

function App () {

  const [user, setUser] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [hasAccount, setHasAccount] = useState(false)

  

  return (
      <div className='app'>
        Bug tracker working test
      </div>
  )
}

export default App
