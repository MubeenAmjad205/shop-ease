"use client"
import Link from 'next/link';
import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 text-white">
      <main className="container mx-auto py-10">
        <h1 className="text-5xl font-extrabold mb-8 text-center">About ShopEase</h1>

        <section className="mb-10 bg-white text-gray-800 p-6 rounded-lg shadow-lg w-[80%] m-auto">
          <div className="flex items-center mb-4">
            <div className="bg-purple-500 text-white p-3 rounded-full">
              <i className="fas fa-info text-2xl"></i>
            </div>
            <h2 className="text-3xl font-bold ml-4">Welcome to ShopEase</h2>
          </div>
          <p className="text-lg leading-relaxed">
            Welcome to ShopEase! We are a dynamic platform dedicated to revolutionizing your online shopping experience. 
            With a commitment to innovation and excellence, we bring you the latest trends, exclusive deals, and a seamless journey from browsing to checkout.
          </p>
        </section>

        <section className="mb-10 bg-white text-gray-800 p-6 rounded-lg shadow-lg w-[80%] m-auto">
          <div className="flex items-center mb-4">
            <div className="bg-pink-500 text-white p-3 rounded-full">
              <i className="fas fa-bullseye text-2xl"></i>
            </div>
            <h2 className="text-3xl font-bold ml-4">Our Mission</h2>
          </div>
          <p className="text-lg leading-relaxed">
            At ShopEase, our mission is simple: to prioritize customer satisfaction and deliver unparalleled value. 
            We aim to empower shoppers by offering a curated selection of high-quality products and a user-friendly interface that makes every interaction delightful.
          </p>
        </section>

        <section className="mb-10 bg-white text-gray-800 p-6 rounded-lg shadow-lg w-[80%] m-auto">
          <div className="flex items-center mb-4">
            <div className="bg-purple-500 text-white p-3 rounded-full">
              <i className="fas fa-star text-2xl"></i>
            </div>
            <h2 className="text-3xl font-bold ml-4">What Sets Us Apart</h2>
          </div>
          <p className="text-lg leading-relaxed">
            Our team is passionate about creating a shopping platform that stands out. From intuitive design to personalized recommendations, 
            we leverage cutting-edge technology to enhance your experience. ShopEase is more than a marketplace; it’s a community built on trust and innovation.
          </p>
        </section>

        <section className="mb-10 bg-white text-gray-800 p-6 rounded-lg shadow-lg w-[80%] m-auto">
          <div className="flex items-center mb-4">
            <div className="bg-pink-500 text-white p-3 rounded-full">
              <i className="fas fa-envelope text-2xl"></i>
            </div>
            <h2 className="text-3xl font-bold ml-4">Get in Touch</h2>
          </div>
          <p className="text-lg leading-relaxed">
            We value your feedback and are always here to help. Whether you have questions, suggestions, or just want to say hello, 
            feel free to reach out. Together, let’s make your shopping journey extraordinary.
          </p>
        </section>

        <div className="text-center mt-10">
          <Link href="/contacts" className="bg-purple-700 text-white px-6 py-3 rounded shadow-lg hover:bg-purple-800 transition">
            Contact Us
          </Link>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
