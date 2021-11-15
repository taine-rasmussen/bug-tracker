import React, { useState, useEffect} from 'react'
import fire from '../fire'

function App () {

  const [user, setUser] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [hasAccount, setHasAccount] = useState(false)

  // Handles user sign in / updates state with error messages if any are made
  const handleLogIn = () => {
    fire
      auth()
      signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code){
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      })
  }

  // Handles user sign up / updates state with error messages if any are made
  const handleSignUp = () => {
    fire
      auth()
      createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code){
          case "auth/email-already-in-use":
          case "auth/Invalid-email ":
            setEmailError(err.message);
            break;
          case "auth/weak -password":
            setPasswordError(err.message);
            break;
        }
      })
  }

  // Signs users out of logged in account
  const handleSignOut = () => {
    fire.auth().signOut();
  }

  // Updates user state if valid user found
  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user)
      } else {
        setUser('')
      }
    })
  }

  // Checks for user on load
  useEffect(() => {
    authListener()
  }, [])

  return (
      <div className='app'>
        Bug tracker working test
      </div>
  )
}

export default App
