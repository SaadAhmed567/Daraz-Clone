import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiShoppingCart, FiUser, FiMenu } from 'react-icons/fi';

const Navbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <nav className="bg-orange-500 sticky top-0 z-50 text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold tracking-tight">
            Daraz
          </Link>

          {/* Destkop Search Bar */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-4">
            <form onSubmit={handleSearch} className="w-full relative flex items-center">
              <input 
                type="text" 
                placeholder="Search in Daraz Store..." 
                className="w-full py-2.5 px-4 rounded-l-lg text-gray-800 focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button 
                type="submit"
                className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2.5 rounded-r-lg transition-colors flex items-center justify-center font-medium"
              >
                <FiSearch size={20} />
              </button>
            </form>
          </div>

          {/* Icons & Links */}
          <div className="flex items-center gap-5">
            <Link to="/login" className="flex items-center gap-1 hover:text-orange-100 transition-colors pointer-events-none opacity-70">
              <FiUser size={22} />
              <span className="hidden sm:inline text-sm font-medium">Login</span>
            </Link>
            <Link to="/cart" className="flex items-center gap-1 hover:text-orange-100 transition-colors pointer-events-none opacity-70">
              <FiShoppingCart size={22} />
              <span className="hidden sm:inline text-sm font-medium">Cart</span>
            </Link>
             {/* Mobile Menu Toggle (Simplified) */}
             <button className="md:hidden">
              <FiMenu size={24} />
             </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="mt-3 md:hidden">
          <form onSubmit={handleSearch} className="flex">
             <input 
                type="text" 
                placeholder="Search..." 
                className="w-full py-2 px-3 rounded-l-md text-gray-800 focus:outline-none text-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button type="submit" className="bg-orange-700 px-3 py-2 rounded-r-md">
                <FiSearch size={18} />
              </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
