import React from 'react'

const Login = () => {
    const register = () => {}
    const loginToApp = () => {}
  return (
    <div className='login'>
        <img alt="logo"/>
        <form>
            <input type="text" placeholder="full name (required if registering)"/>
            <input type="text" placeholder="profile pic URL (optional)"/>
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password"/>
            <button type="submit" onClick={loginToApp}>Sign in</button>
        </form>
        <p>Not a member?{' '}
            <span onClick={register} className='login__register'>Register now</span>
        </p>
    </div>
  )
}

export default Login