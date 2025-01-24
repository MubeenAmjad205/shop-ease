import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://facebook.com" className="text-white hover:text-purple-600">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" className="text-white hover:text-purple-600">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" className="text-white hover:text-purple-600">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://linkedin.com" className="text-white hover:text-purple-600">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        {/* Footer Links */}
        <div className="flex justify-center space-x-6 mb-4">
          <Link href="/privacy" className="hover:text-purple-600">Privacy Policy</Link>
          <Link href="/terms-services" className="hover:text-purple-600">Terms of Service</Link>
          <Link href="/contacts" className="hover:text-purple-600">Contact Us</Link>
        </div>
        {/* Copyright */}
        <p className="text-gray-400">&copy; 2025 ShopEase. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
