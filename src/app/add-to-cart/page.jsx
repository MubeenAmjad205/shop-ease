"use client"
import React, { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  // Function to fetch cart items (example API call)
  const fetchCartItems = async () => {
    try {
      const response = await axios.get('/api/cart');
      setCartItems(response.data);
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  // Function to handle removing an item from the cart
  const handleRemoveItem = async (itemId) => {
    try {
      await axios.delete(`/api/cart/${itemId}`);
      setCartItems(cartItems.filter(item => item.id !== itemId));
    } catch (error) {
      console.error('Error removing item:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 text-white">
      <main className="container mx-auto py-10">
        <h2 className="text-3xl font-bold mb-6">Your Cart</h2>

        {cartItems.length === 0 ? (
          <p className="text-lg">Your cart is empty. <Link href="/products" className="underline">Shop now</Link>.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white text-black rounded-lg shadow-md p-4">
                <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-md mb-4" />
                <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                <p className="text-lg mb-4">${item.price}</p>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default CartPage;
