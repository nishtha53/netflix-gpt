import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div>
    <Header />
    <div className='absolute'>
    <img  src='https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='netflix-img' />
    </div>
    <form className='absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
      <h1 className='font-bold text-3xl py-4'>Sign In</h1>
      <input type='text' placeholder='Emaail or Phone number' className='p-4 my-4 w-full bg-gray-700'/>
      <input type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700'/>
      <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>SignIn</button>
    <p className='py-4'>New to Netflix? Sign up now.</p>
    </form>
    </div>
  )
}

export default Login