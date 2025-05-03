"use server"

import { addProduct } from "@/prisma-db"
import { redirect } from "next/navigation"

export type Errors = {
    title?: string
    description?: string
    price?: string
  }
  export type formState = {
    error:Errors
  }
  
export  async function createProduct(formData:FormData){
    
    const description = formData.get('description') as string
    const price = formData.get('price') as string
    const title = formData.get('title') as string
    // if (!title || !description || isNaN(parseInt(price)) || parseInt(price) < 0) {
    //     throw new Error("Invalid input: all fields are required and price must be a positive number.")
    //   }
    const errors:Errors={}
      if(!title){
        errors.title= 'Title is requires'
      }
      if(!price){
        errors.price= 'price is requires'
      }
      if(!description){
        errors.description= 'description is requires'
      }
      if(Object.keys(errors).length > 0){
        return {errors}
      }
     await addProduct(title, description, parseInt(price));
     redirect('/product-db')
}