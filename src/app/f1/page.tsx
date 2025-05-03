import Link from 'next/link'
import React from 'react'

export default function InterceptingRoutes() {
  return (
    <div>
        <span>
            
        InterceptingRoutes
        </span>
        <Link href={'/f1/f2'}>folder 2</Link>
        <Link href={'/f3'}>folder 3</Link>
        </div>
  )
}
