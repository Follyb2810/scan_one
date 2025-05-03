"use client"
import { useRouter } from 'next/navigation'
import React, { startTransition } from 'react'

export default function ErrorPage({error,reset}:{error:Error,reset:()=>void}) {
    const router = useRouter()
    function reload(){
        startTransition(()=>{
            router.refresh()
            reset()
        })
    }
  return (
    <div> 
        <p>ErrorPage {error.message}</p>
        <button onClick={()=>reload()}>Retry</button>
    </div>
  )
}
