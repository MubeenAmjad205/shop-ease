"use client"
import { session } from '@/lib/session';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';

const AddProduct = () => {
  const router = useRouter();

  useEffect(() => {
    const validateSession = async () => {
      const isValid = await session();
      if (!isValid) {
        console.log("Invalid session");
        // localStorage.removeItem("token");
        console.log("Token removed..");
        toast.error("Session expired, Please login again");
        router.push("/login"); 
      }else if(isValid?.user?.role === "user"){
        toast.error("You are not authorized to add product");
        router.push("/products");
      }
    };

    validateSession();
  }, [router]);

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('productName', data.productName);
    formData.append('description', data.description);
    formData.append('price', data.price);
    formData.append('productImage', data.productImage[0]);

    const token = localStorage.getItem('token');
    if(!token){
      toast.error("Please login to add product");
      router.push("/login");
      return;
    }
    try {
      const response = await axios.post('/api/products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
      });

      if (response.status === 201) {
        reset();
        toast.success("Product added successfully");
        router.push("/products");
      } else {  
        console.log('Error submitting form:', response.statusText);
        toast.error("Error submitting form");
      }
    } catch (error) {
      console.log('Error submitting form:', error);
      toast.error("Error submitting form");
    }
  };

  return (
    <div className="container mx-auto p-4 bg-purple-600">
      <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-white">Product Name</label>
          <input
            type="text"
            {...register('productName', { required: 'Product name is required' })}
            className="mt-1 block w-full border text-gray-700 border-gray-300 rounded-md shadow-sm p-2"
          />
          {errors.productName && <p className="text-red-500 text-sm">{errors.productName.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-white">Description</label>
          <textarea
            {...register('description', { required: 'Description is required' })}
            className="mt-1 block w-full border text-gray-700 border-gray-300 rounded-md shadow-sm p-2"
          />
          {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-white">Price</label>
          <input
            type="number"
            step="0.01"
            {...register('price', { required: 'Price is required' })}
            className="mt-1 block w-full border text-gray-700 border-gray-300 rounded-md shadow-sm p-2"
          />
          {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}
        </div>

        <div>
              <label className="block text-sm font-medium text-white">Product Image</label>
          <input
            type="file"
            {...register('productImage', { required: 'Product image is required' })}
            className="mt-1 block w-full border text-white border-gray-300 rounded-md shadow-sm p-2"
          />
          {errors.productImage && <p className="text-red-500 text-sm">{errors.productImage.message}</p>}
        </div>

        <button
          type="submit"
          className="bg-white text-purple-600  px-4 py-2 rounded-md shadow-sm hover:bg-purple-700"
        >
          Add Product
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddProduct;
