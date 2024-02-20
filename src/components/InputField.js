import React from 'react'

const InputField = ({ placeholder, name, value, setValue, type="text" }) => {
  return (
    <div className='w-full '>
      <input
        type={type} 
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={setValue}
        className='w-full p-2 rounded-md border-2 border-slate-300'
    />
    </div>
  )
}

export default InputField
