"use client";
import {  usePathname } from 'next/navigation'
import React from 'react'

export default function NotFound() {
  const pathName = usePathname()
  const revuewId = pathName.split('/')[0]
  // const productId = useParams()
  
  
  return (
    <div>Product notFound {revuewId} </div>
  )
}
