"use client"

import { useEffect } from "react"

export default function ErrorPage({error}:{error:Error}) {
    useEffect(() => {
      console.log(`this is error page ${error}`)
    }, [error])
    
  return (
    <div className="flex justify-center items-center h-screen">
        <p className="text-2xl text-red-400">
            
        error
        </p>
        </div>
  )
}
