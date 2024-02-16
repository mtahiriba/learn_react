import React from 'react'

const Menu = ({ items }) => {
  return (
    <div className='flex gap-7'>
        {items?.map((item, index) => {
            return <div key={index} className='cursor-pointer hover:font-semibold'>{item}</div>
        })}
    </div>
  )
}

export default Menu