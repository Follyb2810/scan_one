"use client"
import React, { useState } from 'react'

export default function Count() {
    const [counter, setCounter] = useState<number>(0)
  return (
    <div>
        <span>
        Counter {counter}
            
        </span>
        <button onClick={()=>setCounter((prev)=>prev +1)}>Increase</button>
        <button onClick={()=>setCounter((prev)=>prev -1)}>Decrease</button>
        <button onClick={()=>setCounter(()=>counter + 1)}>Increase</button>
        <button onClick={()=>setCounter(()=>counter -1)}>Decrease</button>
        </div>
  )
}
