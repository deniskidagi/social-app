import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import {Login} from '../features/userSlice'
import './Login.css'
import logo from '../images/logo.jpg'
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [profilePic, setProfilePic] = useState('')

    const dispatch = useDispatch()

    const register = () => {
      if(!name) return alert('Please enter full name')
      AuthenticatorAssertionResponse.createUserWithEmailAndPassword(email, password)
      .then(userAuth => userAuth.user.updateProfile({
          displayName: name, photoUrl: profilePic
      })
      .then(() => {
        dispatch(Login({email: userAuth.user.email, uid: userAuth.user.uid, displayName: name, photoUrl: profilePic}))
      }))
    }
    const loginToApp = (e) => {}
  return (
    <div className='login'>
        <img src={logo} alt="logo"/>
        <form>
            <input value={name} onChange={e => setName(e.target.value )} type="text" placeholder="full name (required if registering)"/>
            <input value={profilePic} onChange={e => setProfilePic(e.target.value)} type="text" placeholder="profile pic URL (optional)"/>
            <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="email" />
           <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="password"/>
            <button type="submit" onClick={loginToApp}>Sign in</button>
        </form>
        <p>Not a member?{' '}
            <span onClick={register} className='login__register'>Register now</span>
        </p>
    </div>
  )
}

export default Login