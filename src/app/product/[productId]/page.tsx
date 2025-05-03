// import { useRouter } from 'next/navigation'
import { Metadata } from 'next'
import React from 'react'
type ProductIdProps = {params:Promise<{productId:string}>}

export const generateMetaData =async ({params}:ProductIdProps):Promise<Metadata>=>{
  const {productId} = await params
  const pTitle = await new Promise<string>((resolve, reject) => {
    const error = false;
    if (error) {
      reject('Something went wrong!');
    } else {
      setTimeout(() => {
        resolve(`Iphone ${productId}`);
      }, 100);
    }
  });
  
  return {
    title :`Prodyct ${productId}  ${pTitle}`,
    description:`this is product`
  }
}

export default async function ProductDetails({params}:ProductIdProps) {
    // const {} = useRouter()
    const productId = (await params).productId
  return (
    <div>ProductDetails {productId}</div>
  )
}
