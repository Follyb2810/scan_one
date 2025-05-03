"use client"

import { useFormStatus } from "react-dom"

type ISubmit ={
    label?:string
    isLoading?:boolean
}
export default function Submit({label='Sunmit',isLoading = false}:ISubmit) {
    const {pending} =useFormStatus()
    
  return (
    <button
      disabled={pending || isLoading}
      className={`w-full py-3 px-4 rounded-lg font-semibold text-white transition-all duration-200
         bg-blue-500 hover:bg-blue-600 disabled:bg-gray-500
      `}
    >
       {!pending ? label : "Submitting ...."} 
    </button>
  )
}
