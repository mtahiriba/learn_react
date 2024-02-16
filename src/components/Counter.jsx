import React, { useState } from 'react'
import { Button } from './'

const Counter = (props) => {

    // useState
    const [count, setCount] = useState(0);

    // handle increment
    const increment = () => {
        setCount(count + 1);
    }

    // handle decrement
    const decrement = () => {
        if(count > 0) {
            setCount(count - 1);    
        }
    }

  return (
    <div className='flex flex-col gap-3'>
        <h1>Developer: {props.name} </h1>
        <h1>count: {count}</h1>
        <div className='flex gap-5'>
            <Button placeholder="Increment" handler={increment} type={"primary"}/>
            <Button placeholder="Decrement" handler={decrement} type={"primary"}/>
        </div>
    </div>
  )
}

export default Counter