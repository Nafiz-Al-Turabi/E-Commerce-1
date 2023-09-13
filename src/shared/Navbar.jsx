import React from 'react';
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="pt-4 max-w-7xl mx-auto">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <ul className="flex space-x-4 text-white">
          <li className="text-yellow-950 text-xl hover:text-yellow-900">Home</li>
          <li className="text-yellow-950 text-xl hover:text-yellow-900">Products</li>
          <li className="text-yellow-950 text-xl hover:text-yellow-900">About</li>
          <li className="text-yellow-950 text-xl hover:text-yellow-900">Contact</li>
        </ul>

        {/* Menu */}
        <div className="text-5xl text-yellow-500 font-extrabold">
          BWE
        </div>

        {/* Search and Cart */}
        <div className="relative flex space-x-4 bg-amber-200 outline-fuchsia-50 p-3 rounded-xl">
          {/* Search */}
          <div className="relative text-yellow-950">
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent text-yellow-950 rounded-full py-1 px-3 focus:outline-none"
            />
            <button className="absolute right-0 top-0 mt-1 mr-2 hover:">
              <AiOutlineSearch className='text-2xl' />
            </button>
          </div>

          {/* Cart */}
          <div className="relative">
            <button className="text-yellow-950 flex">
              <span className='text-2xl mr-4'>|</span><AiOutlineShoppingCart className='text-3xl' />
            </button>
            <div className="bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center absolute -top-1 -right-1">
              0{/* You can show the cart item count here */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;