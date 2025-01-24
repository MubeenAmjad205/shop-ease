"use client"
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useParams } from 'next/navigation';
import axios from 'axios';
import { session } from '@/lib/session';

const ProductDetailPage = ( {params}) => {
  const router = useRouter();

   const validateSession = async () => {
    const isValid = await session();
    if (!isValid) {
      console.log("Invalid session");
      localStorage.removeItem("token");
      console.log("Token removed..");
      toast.error("Session expired, Please login again");
      router.push("/login"); // Redirect to login if session is invalid
    }
  };
  useEffect(() => {

    validateSession();
  }, [router]);
  const [product, setProduct] = useState([]);
  const fetchProduct = async()=>{
    const {id} = await params;
    console.log(id);
    const response = await axios.get(`http://localhost:3000/api/products/${id}`);
    const data = await response.data;
    console.log(data);
    setProduct(data);
  }

  useEffect(() => {
    fetchProduct();
 
}, [setProduct]);

  if (!product) {
    return <div className="text-center text-xl">Product not found</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <ToastContainer/>
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row">
          <img src={product?.productImage} alt={product?.name} className="w-full md:w-1/2 h-80 object-cover rounded-md" />
          <div className="md:ml-6 mt-6 md:mt-0">
            <h1 className="text-3xl font-bold">{product?.name}</h1>
            <p className="text-gray-700 text-xl mt-2">${product?.price}</p>
            <p className="text-gray-600 mt-4">{product?.description}</p>
            <button className="mt-6 w-full md:w-auto bg-purple-600 text-white py-2 px-6 rounded-md hover:bg-purple-700">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;