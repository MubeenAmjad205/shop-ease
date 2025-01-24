"use client"
import { session } from '@/lib/session';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const ProductsPage = () => {
  const [products, setProducts] = useState([])
  const router = useRouter();

  useEffect(() => {
    const validateSession = async () => {
      const isValid = await session();
      if (!isValid) {
        console.log("Invalid session");
        // localStorage.removeItem("token");
        console.log("Token removed..");
        toast.error("Session expired, Please login again");
        router.push("/login"); // Redirect to login if session is invalid
      }
    };

    validateSession();
  }, [router]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("/api/products");
      if (response.status === 200) {
        console.log("response : ", response.data);
        setProducts(response.data);
      } else {
        toast.error("Error fetching products, Try Reloading");
      }
    };
    fetchProducts();

  }, [setProducts])
  // const products = [
  //   {
  //     id: 1,
  //     name: 'Wireless Headphones',
  //     price: '$99',
  //     description: 'High-quality wireless headphones with noise-canceling technology.',
  //     image: 'https://via.placeholder.com/150',
  //   },
  //   {
  //     id: 2,
  //     name: 'Smart Watch',
  //     price: '$199',
  //     description: 'Track your fitness and stay connected with this sleek smartwatch.',
  //     image: 'https://via.placeholder.com/150',
  //   },
  //   {
  //     id: 3,
  //     name: 'Gaming Mouse',
  //     price: '$49',
  //     description: 'Ergonomic gaming mouse with customizable buttons and RGB lighting.',
  //     image: 'https://via.placeholder.com/150',
  //   },
  //   {
  //     id: 4,
  //     name: 'Portable Speaker',
  //     price: '$79',
  //     description: 'Compact and powerful speaker with excellent sound quality.',
  //     image: 'https://via.placeholder.com/150',
  //   },
  // ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 text-white">
      <main className="container mx-auto py-10 px-4">
        <h1 className="text-5xl font-extrabold mb-8 text-center">Our Products</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white text-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <img
                src={product.productImage}
                alt={product.productName}
                className="w-full h-40 object-cover rounded-t-lg mb-4"
              />
              <h2 className="text-2xl font-bold mb-2">{product.productName}</h2>
              <p className="text-lg text-gray-600 mb-4">{product.description}</p>
              <div className="text-lg font-bold mb-4">${product.price}</div>
              <div className="flex justify-start gap-2">
              <button className="bg-purple-700 text-white px-4 py-2 rounded shadow-lg hover:bg-purple-800 transition">
                Add to Cart
              </button>
              <Link href={`/product-detail/${product._id}`} className="bg-purple-700 text-white px-4 py-2 rounded shadow-lg hover:bg-purple-800 transition">
                Details
              </Link>
              </div>

            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProductsPage;
