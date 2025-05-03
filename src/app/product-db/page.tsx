import { getAllProduct } from '@/prisma-db'
import React from 'react'

type IProductDb ={
    id: number
    title :string
    price: number
    description:string | null
}
export default async function ProductDb() {
    const products:IProductDb[] = await getAllProduct()
    
  return (
    <div>
        <ul className="p-4 space-y-3">
            {
                products.map((product:IProductDb,index:number)=>(
                    <li className="bg-white p-4 shadow-md rounded-lg" key={index}>
                        <h1 className="text-xl font-semibold">{product.title}</h1>
                        <p>{product.description}</p>
                        <p className="font-medium text-lg">{product.price}</p>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}
