import React from 'react'

export default function Card({children}:{children:React.ReactNode}) {
  return (
    <div className='p-5 m-2.5 shadow-2xs border border-amber-300 flex justify-center items-center'>{children}</div>
  )
}
