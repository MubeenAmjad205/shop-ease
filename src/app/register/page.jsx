"use client"
import axios from 'axios';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter();

  const onSubmit = async (data) => {
    const response =  await axios.post('api/auth', data);
    if(response.status === 201){
      console.log(response.data.success);
      
      toast.success('User created successfully');
      router.push('/login');
    }
    console.log(response);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <ToastContainer />
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-purple-600">Register</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              {...register('name', {
                required: 'Please Enter your name',
              })}
              className="w-full p-2 mt-1 border text-gray-700 border-gray-300 rounded-md shadow-sm"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              {...register('email', { required: 'Email is required' })}
              className="w-full p-2 mt-1 border text-gray-700 border-gray-300 rounded-md shadow-sm"
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              {...register('password', { required: 'Password is required' })}
              className="w-full p-2 mt-1 border text-gray-700 border-gray-300 rounded-md shadow-sm"
            />
            {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>}
          </div>


          <button
            type="submit"
            className="w-full px-4 py-2 font-semibold text-white bg-purple-600 rounded-md shadow-sm hover:bg-purple-700"
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{' '}
              <Link href="/login" className="text-purple-600 hover:text-purple-700 hover: underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
