import { notFound, redirect, } from 'next/navigation'
import React from 'react'

export default async function ReviewId({params}:{params:Promise<{reviewId:string,productId:string}>}) {
   const {reviewId,productId} = await params
   
   if(parseInt(reviewId) > 200){
    return notFound()
   }
   if(parseInt(reviewId) > 200){
    redirect('/')
   }
   
    return (
    <div>{productId} is ReviewId {reviewId}</div>
  )
}
