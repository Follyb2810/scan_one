import Submit from "@/component/submit";
// import { addProduct } from "@/prisma-db";
// import { redirect } from "next/navigation";
import { useActionState } from "react";
import { createProduct, formState } from "./product";

// type Errors = {
//   title?: string
//   description?: string
//   price?: string
// }
// type formState = {
//   error:Errors
// }
export default async function AddProduct() {
  const initailErrorState:formState = {error:{}}
 const [state,formAction,isPending] = useActionState(createProduct,initailErrorState)
    // async function createProduct(formData:FormData){
    //     "use server"
    //     const description = formData.get('description') as string
    //     const price = formData.get('price') as string
    //     const title = formData.get('title') as string
    //     // if (!title || !description || isNaN(parseInt(price)) || parseInt(price) < 0) {
    //     //     throw new Error("Invalid input: all fields are required and price must be a positive number.")
    //     //   }
    //     const errors:Errors={}
    //       if(!title){
    //         errors.title= 'Title is requires'
    //       }
    //       if(!price){
    //         errors.price= 'price is requires'
    //       }
    //       if(!description){
    //         errors.description= 'description is requires'
    //       }
    //       if(Object.keys(errors).length > 0){
    //         return {errors}
    //       }
    //      await addProduct(title, description, parseInt(price));
    //      redirect('/product-db')
    // }

  return (
    <form 
    
    // action={createProduct}
    action={formAction}
    className="p-6 space-y-6 max-w-md mx-auto bg-white/10 backdrop-blur-md rounded-xl shadow-xl border border-white/20"
    
  >
    <h2 className="text-2xl font-bold text-white text-center">Create Product</h2>

    {['title', 'description', 'price'].map((field, idx) => (
      <div key={idx}>
        <label htmlFor={field} className="block text-sm font-medium text-blue-600 capitalize mb-1">
          {field}
        </label>
        <input
          type={field === 'price' ? 'number' : 'text'}
          name={field}
        //   value={productDetails[field as keyof IProductCreate]}
        //   onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg border-2 bg-white/90 text-black focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 placeholder:text-gray-500"
          placeholder={`Enter ${field}`}
        />
        {state.errors.description && <p className="text-red-600">{state.errors.description}</p>}
        {state.errors.price && <p className="text-red-600">{state.errors.price}</p>}
        {state.errors.title && <p className="text-red-600">{state.errors.title}</p>}
      </div>
    ))}

      <Submit isLoading={isPending}/>
  </form>
  )
}
