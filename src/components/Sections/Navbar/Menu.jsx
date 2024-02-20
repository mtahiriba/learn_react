import React from 'react'
import { Link } from 'react-router-dom';
const Menu = ({ items }) => {
  return (
    <div className='flex gap-7'>
        {items?.map((item) => {
            return (
            <Link to={item.path} key={item.id}>
              <div className='cursor-pointer hover:font-semibold'>{item.name}</div>
            </Link>
            )
        })}
    </div>
  )
}

export default Menu