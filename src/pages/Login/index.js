import React from 'react'
import Form from './form'

const Login = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center '>
        <div className='w-[400px] rounded-lg bg-slate-300 px-5 py-10 flex flex-col gap-5'>
            <span className=' flex justify-center items-center text-2xl font-semibold'>Login Form</span>
            <Form />
        </div>
    </div>
  )
}

export default Login