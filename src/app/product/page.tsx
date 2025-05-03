import Link from 'next/link'
import React from 'react'

export default function Product() {
  return (
    <div>
      <Link href='/product' >Product</Link>
      <h1>Product List</h1>
      <Link href={'/product/1'} replace >Prouct 1</Link>
      <Link href={'/product/2'}>Prouct 2</Link>
      <Link href={'/product/3'}>Prouct 3</Link>
    </div>
  )
}
