"use clinet"
import { useRouter as Router} from 'next/router'
import { useRouter  } from 'next/navigation'
import React from 'react'

export default function OrderProduct() {
    const router = Router()
    const routers = useRouter()
 function handleClick(){
    console.log('order buy')
    // console.log(routers.) 
    router.push('/')
    
 }
    return (
    <div>
        <h4>OrderProduct</h4>
        <button onClick={handleClick}></button>
    </div>
  )
}
