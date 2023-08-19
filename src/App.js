import React from 'react'
import './App.css'
import { useState } from 'react'

export default function App() {

  const[count,setCount]=useState(0);

  function handleDelete(){
    setCount(count+1)

  }

  function handlereset(){
    setCount(0)

  }


  function handledecrement(){
    setCount(count-1)

  }


  return (
    <div className='bg-container'>
      <div className='card-container'>
        <h1 className='heading'>Counter</h1>
        <p className='initial'>{count}</p>
        <div className='card-btn'>
          <button id="increment" onClick={()=>handleDelete()}>increment</button>
          <button id="reset" onClick={()=>handlereset()}>reset</button>
          <button id="decrement" onClick={()=>handledecrement()}>decrement</button>
        </div>

        
</div>

    </div>
  )
}
