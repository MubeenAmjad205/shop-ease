"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { logout, session } from '@/lib/session';
import { useRouter } from 'next/navigation';
import { toast, ToastContainer } from 'react-toastify';

const Header = () => {
  const router = useRouter();
  
const [user, setUser] = useState(null);

// useEffect(()=>{
//   router.refresh()

// },[setUser])
  useEffect(() => {
    const validateSession = async () => {
      const isValid = await session();
      if (!isValid) {
        setUser(null);
        // console.log("Invalid session");
        // localStorage.removeItem("token");
        // console.log("Token removed..");
        // toast.error("Session expired, Please login again");
        // router.push("/login"); 
      }else{
        setUser(isValid);
        console.log(isValid);
      }
     
    };

    validateSession();
  }, [router, setUser,]);

  // const user = {
  //   username: 'JohnDoe123',
  //   avatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`, 
  // };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false); // State to handle search bar visibility

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen); 
  };

  const handleLogout = () => {
    logout()
    setUser(null)
    router.push(("/login"))
    // alert('Logging out...');
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-purple-600">
          <i className="fas fa-store"></i> ShopEase
        </Link>
        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-600 hover:text-purple-600 border-b-2 border-[#ab55f3] hover:scale-110">Home</Link>
          <Link href="/products" className="text-gray-600 hover:text-purple-600 border-b-2 border-[#ab55f3] hover:scale-110">Shop</Link>
          <Link href="/about" className="text-gray-600 hover:text-purple-600 border-b-2 border-[#ab55f3] hover:scale-110">About</Link>
          <Link href="/contacts" className="text-gray-600 hover:text-purple-600 border-b-2 border-[#ab55f3] hover:scale-110">Contact</Link>
          {user?.user?.role === "admin" && <Link href="/add-product" className="text-gray-600 hover:text-purple-600 border-b-2 border-[#ab55f3] hover:scale-110">Add Product</Link>}
          {user?.user?.role === "admin" && <Link href="/users" className="text-gray-600 hover:text-purple-600 border-b-2 border-[#ab55f3] hover:scale-110">Users</Link>}
        </nav>
        {/* Icons */}
        <div className="">
          {/* Search Icon */}
          
          {/* User Dropdown */}
          {user ? (<div className="flex items-center space-x-5 relative">
          <button
            onClick={toggleSearch}
            className="text-gray-600 hover:text-purple-600 hover:scale-110 "
          >
            <i className="fas fa-search"></i>
          </button>

          <div
            className={`${
              isSearchOpen ? 'block' : 'hidden'
            } absolute right-[110%] mr-2 mt-2 bg-white border border-gray-200 rounded-md w-64 transition-all duration-300 ease-in-out`}
          >
            <input
              type="text"
              className="w-full p-2 text-gray-600 focus:outline-none rounded-md border- border-[#dc4baf] shadow-md shadow-[#dc4baf] transition-all"
              placeholder="Search products..."
            />
          </div>

          <Link href="/add-to-cart" className="text-gray-600 hover:text-purple-600 hover:scale-110">
            <i className="fas fa-shopping-cart"></i>
          </Link>
            <div className="relative">
            <button
              onClick={toggleDropdown}
              className="text-gray-600 hover:text-purple-600 flex items-center hover:scale-110"
            >
              <i className="fas fa-user"></i>
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 bg-white shadow-xl rounded-lg w-48 py-2 border border-gray-200">
                <div className="flex items-center p-3 border-b border-gray-200 space-x-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-green-400 flex items-center justify-center">
                        <span className="text-white font-semibold">
                          {user?.user?.name?.slice(0,1).toUpperCase()}
                        </span>
                      </div>
                  <span className="text-gray-700 font-semibold">{user?.user?.name}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="w-full text-left text-red-600 hover:bg-gray-100 px-4 py-2 rounded-md transition-all duration-200 ease-in-out flex items-center space-x-2"
                >
                  <i className="fas fa-sign-out-alt"></i>
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
          </div>
          ):
          (<div className="flex items-center space-x-3">
            <div className="relative">
            <Link href="/login" className="text-white bg-purple-600 px-4 py-2 rounded-md hover:bg-purple-700">
              {/* <i className="fas fa-user"></i> */}
              <span>Login</span>
            </Link>
          </div>
          <div className="relative  ">
            <Link href="/login" className="text-white bg-purple-600 px-4 py-2 rounded-md hover:bg-purple-700">
              {/* <i className="fas fa-user"></i> */}
              <span>Signup</span>
            </Link>
          </div>
          </div>
          )
          }
        </div>
        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-600 hover:text-purple-600">
          <i className="fas fa-bars"></i>
        </button>
      </div>
      <ToastContainer />
    </header>
  );
};

export default Header;
