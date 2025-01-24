"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

const HomePage = () => {
  let router= useRouter();
  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 min-h-screen text-white font-sans">
      {/* Hero Section */}
      <header className="flex flex-col md:flex-row items-center justify-between px-10 py-20">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Discover Amazing Products
          </h1>
          <p className="text-lg my-6">
            Shop the latest trends and enjoy exclusive deals on our platform.
          </p>
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 justify-center md:justify-start">
            <button  onClick={()=>{
              router.push("/products")
            }} className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg shadow-md">
              Shop Now
            </button>
            <button onClick={()=>{
              router.push("/login")
            }} className="bg-white text-purple-600 hover:bg-gray-100 px-6 py-3 rounded-lg shadow-md">
              Login
            </button>
            <button  onClick={()=>{
              router.push("/register")
            }} className="bg-white text-purple-600 hover:bg-gray-100 px-6 py-3 rounded-lg shadow-md">
              Register
            </button>
          </div>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0">
          <img
            src="E-commerce.jpg"
            alt="Shopping"
            className="rounded-lg shadow-lg"
          />
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 bg-white text-gray-800">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Why Choose Us</h2>
          <p className="text-lg text-gray-600 mt-4">
            Experience the best shopping journey with us.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10">
          <div className="flex flex-col items-center text-center">
            <i className="fas fa-shipping-fast text-4xl text-purple-500 mb-4"></i>
            <h3 className="text-xl font-semibold">Fast Delivery</h3>
            <p className="text-gray-600 mt-2">
              Get your orders delivered quickly and safely.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <i className="fas fa-tags text-4xl text-pink-500 mb-4"></i>
            <h3 className="text-xl font-semibold">Best Prices</h3>
            <p className="text-gray-600 mt-2">
              Enjoy competitive prices and great deals.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <i className="fas fa-star text-4xl text-yellow-500 mb-4"></i>
            <h3 className="text-xl font-semibold">Top Quality</h3>
            <p className="text-gray-600 mt-2">
              Shop products from trusted brands.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
