import { getproductbyid } from '@/sanity/lib/data'
import React from 'react'

export default async function page({params}:{params: {slug:string}}) {

const {slug} = params;
const items= await getproductbyid(slug)

if (!items) {
    return (
      <div>
        <p>No product found</p>
      </div>
    );
  }



  return (
    

<div className="flex justify-center items-center min-h-screen bg-gray-100 p-5">
  <div className="bg-white rounded-lg shadow-lg w-80 p-5">
    <img
      src={items?.imageUrl}
      alt={items?.name}
      className="w-full h-48 object-cover rounded-lg"
    />
    <h2 className="text-lg font-semibold text-gray-800 mt-3">{items?.name}</h2>
    <p className="text-sm text-gray-500 mt-1">Category: {items?.category}</p>
    <p className="text-sm text-gray-600 mt-2">{items?.description}</p>
    <p className="text-sm text-red-500 mt-2">
      Discount: {items?.discountPercentage ? `${items.discountPercentage}%` : "N/A"}
    </p>
    <p className={`text-sm font-medium mt-2 ${items?.isFeaturedProduct ? "text-green-600" : "text-gray-600"}`}>
      {items?.isFeaturedProduct ? "Featured Product" : "Regular Product"}
    </p>
    <p className="text-lg font-bold text-blue-600 mt-3">Price: ${items?.price}</p>
  </div>
</div>

  )
}
