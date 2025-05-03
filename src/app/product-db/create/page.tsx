"use client"
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

type IProductCreate = {
  title: string
  description: string
  price: number
}

export default function CreateProduct() {
  const [productDetails, setProductDetails] = useState<IProductCreate>({
    title: '',
    description: '',
    price: 0
  })
  const [loading, setLoading] = useState(false)
  const router = useRouter()

//   const { description, price, title } = productDetails

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setProductDetails(prev => ({
      ...prev,
      [name]: name === "price" ? Number(value) : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await fetch(`/product-db/create/api`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productDetails),
      })

      if (!response.ok) {
        throw new Error('wahala in api')
      }

      router.push('/product-db')
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form
      className="p-6 space-y-6 max-w-md mx-auto bg-white/10 backdrop-blur-md rounded-xl shadow-xl border border-white/20"
      onSubmit={handleSubmit}
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
            value={productDetails[field as keyof IProductCreate]}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border-2 bg-white/90 text-black focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 placeholder:text-gray-500"
            placeholder={`Enter ${field}`}
          />
        </div>
      ))}

      <button
        disabled={loading}
        className={`w-full py-3 px-4 rounded-lg font-semibold text-white transition-all duration-200 ${
          loading
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-blue-500 hover:bg-blue-600'
        }`}
      >
        {loading ? 'Submitting...' : 'Create Product'}
      </button>
    </form>
  )
}
