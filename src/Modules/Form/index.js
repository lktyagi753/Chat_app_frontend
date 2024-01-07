import React, { useState } from 'react'
import Input from '../../Components/Input'
import Button from '../../Components/Button'
import { useNavigate } from 'react-router-dom'

const Form = ({
    isSignInPage = false,
}) => {
   const [data, setData] = useState({
    ...(!isSignInPage && {
        fullName : ''
    }),
    email : '',
    password : '',
   })

   const navigate = useNavigate()
  return (
    <div className="bg-light h-screen flex justify-center items-center">
        <div className='bg-white w-[600px] h-[800px] shadow-lg rounded-lg flex flex-col justify-center items-center'>
            <div className='text-4xl font-extrabold'>Welcome {isSignInPage && "Back"} </div>
            <div className='text-xl font-bold mb-14 mt-1'>{isSignInPage ? "Sign-in to get explore" : "Sign-up now to get started"}</div>
            <form className='flex flex-col justify-center items-center w-full' onSubmit={() => {console.log("hi")}}>
                {!isSignInPage && <Input label='Full Name' name='name' placeholder='Enter your Full Name' className='mb-6' value={data.fullName} onChange={(e) => setData({...data, fullName: e.target.value})}></Input>}
                <Input label='Email' name='email' type='email' placeholder='Enter your email address' className='mb-6' value={data.email} onChange={(e) => setData({...data, email: e.target.value})}></Input>
                <Input label='Password' name='password' type='password' placeholder='Enter your password' className='mb-14' value={data.password} onChange={(e) => setData({...data, password: e.target.value})}></Input>
                <Button label={isSignInPage ? 'Sign-in' : 'Sign up'} type='submit' className='w-1/2 mb-2'/>
            </form>
            <div>{isSignInPage ? "Don't have an account?":"Already have an account?"}<span className='text-[#1476ff] cursor-pointer hover:underline' onClick={() => navigate(`/users/${isSignInPage ? 'sign_up' : 'sign_in'}`)}>{isSignInPage ? " Sign up" : " Sign in"}</span></div>
        </div>
    </div>
  )
}

export default Form
